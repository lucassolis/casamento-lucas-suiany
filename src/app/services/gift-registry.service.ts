import { Injectable } from '@angular/core';
import { Gift } from '../interfaces/gift.interface';

@Injectable({
  providedIn: 'root'
})
export class GiftRegistryService {
  private gifts: Gift[] = [
    {
      id: 8,
      name: 'Kit de produtos de limpeza para a nova casa dos noivos',
      value: 50,
      imageUrl: './assets/images/faxina.png' 
    },
    {
      id: 9,
      name: 'Pizza para a primeira noite dos noivos na nova casa',
      value: 60,
      imageUrl: './assets/images/pizza.png' 
    },
    {
      id: 15,
      name: 'Ajude o casal com as promoções da amazon',
      value: 70,
      imageUrl: './assets/images/amazon.png' 
    },
    {
      id: 14,
      name: 'Vale-presente para sair em um dia especial',
      value: 80,
      imageUrl: './assets/images/14.png' 
    },
    {
      id: 16,
      name: 'Contribua com nosso plano de "Netflix e Felizes Para Sempre"',
      value: 90,
      imageUrl: './assets/images/netflix.png' 
    },
    {
      id: 18,
      name: 'Pra garantir que o "na saúde e na doença" seja mais saúde que na doença.',
      value: 100,
      imageUrl: './assets/images/remedios.png' 
    },
    {
      id: 19,
      name: 'Presenteie nosso vício saudável: jogar até esquecer a hora do jantar.',
      value: 110,
      imageUrl: './assets/images/games.png' 
    },
    {
      id: 20,
      name: 'Presenteie o casal masterchef ou pelo menos o casal que tenta.',
      value: 120,
      imageUrl: './assets/images/masterchef.png' 
    },
    {
      id: 21,
      name: 'Presenteie nossa tentativa de virar casal sarado (sem promessas).',
      value: 130,
      imageUrl: './assets/images/academia.png' 
    },
    {
      id: 22,
      name: 'Um mimo pra quem sobreviveu aos preparativos do casamento.',
      value: 140,
      imageUrl: './assets/images/relax.png' 
    },
    {
      id: 23,
      name: 'Tratamento de rinite para noiva',
      value: 150,
      imageUrl: './assets/images/rinite.png' 
    },
    {
      id: 24,
      name: 'Vale "sem conversar durante Red Dead"',
      value: 160,
      imageUrl: './assets/images/ticket.png' 
    },
    {
      id: 25,
      name: 'Jantar romântico para os noivos',
      value: 170,
      imageUrl: './assets/images/jantar.png' 
    },
    {
      id: 17,
      name: 'Ajude esses dois a trocarem boletos por passagens aéreas',
      value: 180,
      imageUrl: './assets/images/viagem.png' 
    },
    {
      id: 10,
      name: 'GTA VI para os noivos aproveitarem juntos',
      value: 190,
      imageUrl: './assets/images/GTAVI.png' 
    },
    // Add more gifts here
  ];

  getGifts(): Gift[] {
    return this.gifts;
  }

  copyPixKey(key: string): void {
    navigator.clipboard.writeText(key);
  }
}