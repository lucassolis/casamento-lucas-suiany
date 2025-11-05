import { Component } from '@angular/core';
import { GiftRegistryService } from '../../services/gift-registry.service';
import { Gift } from '../../interfaces/gift.interface';

@Component({
  selector: 'app-gift-registry',
  standalone: true,
  template: `
    <div class="gift-registry-container">
      <h1>Lista de Presentes</h1>
      
      <div class="explanation">
        <p>Para tornar esse momento ainda mais especial, criamos esta lista de presentes sugeridos. 
           Você pode escolher qualquer valor para nos presentear através do PIX.</p>
      </div>

      <div class="gifts-grid">
        @for (gift of gifts; track gift.id) {
          <div class="gift-card">
          <img [src]="gift.imageUrl" [alt]="gift.name" (error)="handleImageError($event)">
          <h3>{{gift.name}}</h3>
          <p class="price">R$ {{gift.value.toFixed(2)}}</p>
          <button class="gift-btn" (click)="scrollToPayment()">Presentear</button>
          </div>
        }
      </div>

      <div class="payment-section" id="payment">
        <h1>Informações para Transferência</h1>
        
        <div class="payment-options">
          <div class="payment-card">
            <h3>Lucas Solis Freire Silva Ramos</h3>
            <p>Banco: Itaú</p>
            <p>CPF: ****373.628-**</p>
            <p>Chave PIX: (11) 95451-9781</p>
            <button class="copy-btn" (click)="copyPixKey('11954519781')">
              Copiar chave PIX
            </button>
          </div>

          <div class="payment-card">
            <h3>Suiany Olher Encinas Racheti</h3>
            <p>Banco: Nubank</p>
            <p>CPF: ****291.588-**</p>
            <p>Chave PIX: (11) 95054-5333</p>
            <button class="copy-btn" (click)="copyPixKey('11950545333')">
              Copiar chave PIX
            </button>
          </div>
        </div>

        <div class="message">
          <p>Caso queira se identificar, deixa uma mensagem especial no campo de mensagem do PIX, 
             ou envie uma mensagem para o telefone de um dos noivos.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .gift-registry-container {
      max-width: 1200px;
      margin: 80px auto 0;
      padding: 2rem;
    }

    h1, h2 {
      color: #414B33;
      text-align: center;
      margin-bottom: 2rem;
    }

    .explanation {
      text-align: center;
      max-width: 800px;
      margin: 0 auto 3rem;
      color: #414B33;
    }

    .gifts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }

    .gift-card {
      background: #FAF8F1;
      border-radius: 8px;
      padding: 1rem;
      text-align: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: transform 0.3s;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .gift-card:hover {
      transform: translateY(-5px);
    }

    .gift-card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 4px;
      margin-bottom: 1rem;
    }

    .gift-card h3 {
      color: #414B33;
      margin-bottom: 0.5rem;
      flex: 1;
    }

    .price {
      color: #94A678;
      font-weight: bold;
      margin-top: auto;
      margin-bottom: 1rem;
    }

    .gift-btn {
      background: #414B33;
      color: #FAF8F1;
      border: none;
      padding: 0.5rem 1.5rem;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: auto;
      align-self: center;
    }

    .gift-btn:hover {
      background: #94A678;
      transform: translateY(-2px);
    }

    .payment-section {
      background: linear-gradient(170deg, #f0ede1 0%, #FAF8F1 100%);
      padding: 3rem 2rem;
      border-radius: 16px;
      margin-top: 4rem;
      box-shadow: 0 4px 20px rgba(65, 75, 51, 0.05);
    }

    .payment-options {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .payment-card {
      background: linear-gradient(145deg, #FAF8F1 0%, #f5f2e6 100%);
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
      box-shadow: 0 4px 15px rgba(148, 166, 120, 0.1);
      border: 1px solid rgba(148, 166, 120, 0.2);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .payment-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 20px rgba(148, 166, 120, 0.15);
    }

    .payment-card h3 {
      color: #414B33;
      margin-bottom: 1.5rem;
      font-size: 1.3rem;
      border-bottom: 2px solid #94A678;
      padding-bottom: 0.8rem;
      display: inline-block;
    }

    .payment-card p {
      margin: 0.8rem 0;
      color: #414B33;
      font-size: 1.1rem;
    }

    .copy-btn {
      background: #94A678;
      color: white;
      border: none;
      padding: 0.8rem 2rem;
      border-radius: 25px;
      margin-top: 1.5rem;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 600;
      box-shadow: 0 2px 8px rgba(148, 166, 120, 0.2);
    }

    .copy-btn:hover {
      background: #414B33;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(148, 166, 120, 0.3);
    }

    .message {
      text-align: center;
      margin-top: 2rem;
      color: #414B33;
    }

    @media (max-width: 768px) {
      .gifts-grid {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      }

      .payment-options {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class GiftRegistryComponent {
  gifts: Gift[] = [];

  constructor(private giftRegistryService: GiftRegistryService) {
    this.gifts = this.giftRegistryService.getGifts();
    console.log('Gifts loaded:', this.gifts); // Debug log
  }

  handleImageError(event: any) {
    console.error('Erro ao carregar imagem:', event);
    // Fallback para uma imagem padrão em caso de erro
    event.target.src = 'https://placehold.co/400x300?text=Imagem+não+encontrada';
  }

  scrollToPayment() {
    const element = document.getElementById('payment');
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  copyPixKey(key: string) {
    this.giftRegistryService.copyPixKey(key);
  }
}