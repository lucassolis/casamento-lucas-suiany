import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  standalone: true,
  template: `
    <div class="home-container">
      <section class="hero">
        <div class="wedding-date">06 de Dezembro de 2025</div>
        <h1>Lucas Solis & Suiany Racheti</h1>
        <p class="invite">Convidam você para celebrar seu amor em uma cerimônia especial</p>
        <div class="countdown-container">
          <p class="countdown-title">Contagem regressiva para o grande dia</p>
          <div class="countdown">
            <div class="countdown-item">
              <span>{{days}}</span>
              <label>Dias</label>
            </div>
            <div class="countdown-item">
              <span>{{hours}}</span>
              <label>Horas</label>
            </div>
            <div class="countdown-item">
              <span>{{minutes}}</span>
              <label>Minutos</label>
            </div>
            <div class="countdown-item">
              <span>{{seconds}}</span>
              <label>Segundos</label>
            </div>
          </div>
        </div>
      </section>

      <section class="event-details">
        <div class="detail-card">
          <h2>🕐 Horário</h2>
          <p>12:30</p>
        </div>
        <div class="detail-card">
          <h2>📍 Local</h2>
          <p>Rua Embirataí, 376</p>
          <p>Jardim Santa Maria</p>
          <a routerLink="/local" class="venue-link">Ver no mapa</a>
        </div>
      </section>

      <section class="info">
        <div class="message-card">
          <div class="message-content">
            <h2>💝 Sua presença é nosso maior presente!</h2>
            <p>Estamos muito felizes em compartilhar este momento tão especial com você!</p>
            <p class="important-note">Por favor, observe que o convite é pessoal e intransferível. 
            O espaço foi reservado considerando o número exato de convidados. ❤️</p>
          </div>
        </div>

        <div class="gift-card">
          <div class="gift-content">
            <h2>🎁 Lista de Presentes</h2>
            <p>Se você deseja nos presentear, preparamos uma lista divertida que vai ajudar muito os noivos 
            (meio quebrados 😅) a começarem sua vida a dois!</p>
            <a routerLink="/presentes" class="gift-link">Ver lista de presentes</a>
          </div>
        </div>

        <div class="confirmation">
          <h2>✨ Confirmação de Presença</h2>
          <p>Por favor, confirme sua presença até 20/11/2025</p>
          <p class="confirmation-note">Sua confirmação é muito importante para nós!</p>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home-container {
      max-width: 1200px;
      margin: 60px auto 0;
      padding: 2rem;
    }

    .hero {
      text-align: center;
      margin-bottom: 4rem;
      position: relative;
      padding: 2rem;
      border-radius: 20px;
    }

    .wedding-date {
      font-size: 1.5rem;
      color: #94A678;
      margin-bottom: 1rem;
      font-weight: 500;
    }

    .hero h1 {
      color: #414B33;
      font-size: 3rem;
      margin-bottom: 1rem;
      font-weight: 700;
      letter-spacing: 1px;
    }

    .invite {
      font-size: 1.2rem;
      color: #414B33;
      margin-bottom: 2rem;
    }

    .countdown-container {
      background: linear-gradient(165deg, #f5f2e6 0%, #FAF8F1 100%);
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 4px 15px rgba(148, 166, 120, 0.15);
      border: 1px solid rgba(148, 166, 120, 0.2);
      transform: translateY(-5px);
    }

    .countdown-title {
      color: #414B33;
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
      font-weight: 500;
    }

    .countdown {
      display: flex;
      justify-content: center;
      gap: 2.5rem;
      margin-top: 1rem;
    }

    .countdown-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: linear-gradient(145deg, #FAF8F1 0%, #f5f2e6 100%);
      padding: 1rem 1.5rem;
      border-radius: 12px;
      min-width: 100px;
      box-shadow: 0 4px 12px rgba(148, 166, 120, 0.12);
    }

    .countdown-item span {
      font-size: 2.8rem;
      font-weight: bold;
      color: #414B33;
      line-height: 1;
    }

    .countdown-item label {
      color: #94A678;
      margin-top: 0.5rem;
      font-weight: 500;
    }

    .event-details {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin: 3rem 0;
    }

    .detail-card {
      background: linear-gradient(145deg, #f5f2e6 0%, #FAF8F1 100%);
      padding: 2rem;
      border-radius: 15px;
      text-align: center;
      min-width: 250px;
      box-shadow: 0 4px 15px rgba(148, 166, 120, 0.15);
      border: 1px solid rgba(148, 166, 120, 0.2);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .detail-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(148, 166, 120, 0.2);
    }

    .detail-card h2 {
      color: #94A678;
      margin-bottom: 1rem;
      font-size: 1.3rem;
    }

    .detail-card p {
      color: #414B33;
      font-size: 1.2rem;
      margin: 0.3rem 0;
    }

    .venue-link {
      display: inline-block;
      margin-top: 1rem;
      color: #94A678;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .venue-link:hover {
      color: #414B33;
      transform: translateY(-2px);
    }

    .info {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }

    .message-card, .gift-card {
      background: linear-gradient(145deg, #FAF8F1 0%, #f5f2e6 100%);
      padding: 2.5rem;
      border-radius: 15px;
      margin-bottom: 2rem;
      box-shadow: 0 4px 15px rgba(148, 166, 120, 0.1);
    }

    .message-content, .gift-content {
      max-width: 600px;
      margin: 0 auto;
    }

    .message-card h2, .gift-card h2 {
      color: #414B33;
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
    }

    .important-note {
      margin-top: 1.5rem;
      padding: 1rem;
      background: rgba(148, 166, 120, 0.1);
      border-radius: 8px;
      color: #414B33;
      font-weight: 500;
    }

    .gift-link {
      display: inline-block;
      margin-top: 1.5rem;
      padding: 0.8rem 2rem;
      background: #94A678;
      color: #FFFFFF;
      text-decoration: none;
      border-radius: 25px;
      font-weight: 500;
      transition: all 0.3s ease;
      box-shadow: 0 4px 12px rgba(148, 166, 120, 0.2);
    }

    .gift-link:hover {
      background: #414B33;
      transform: translateY(-2px);
      box-shadow: 0 6px 15px rgba(148, 166, 120, 0.3);
    }

    .confirmation {
      margin: 4rem 0;
      padding: 2.5rem;
      background: linear-gradient(165deg, #f5f2e6 0%, #FAF8F1 100%);
      border-radius: 15px;
      box-shadow: 0 4px 15px rgba(148, 166, 120, 0.15);
      border: 1px solid rgba(148, 166, 120, 0.2);
      transform: translateZ(0);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .confirmation:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(148, 166, 120, 0.2);
    }

    .confirmation h2 {
      color: #414B33;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    .confirmation-note {
      color: #94A678;
      margin-top: 1rem;
      font-weight: 500;
    }

    @media (max-width: 768px) {
      .hero h1 {
        font-size: 2rem;
      }

      .countdown {
        flex-wrap: wrap;
        gap: 1rem;
      }

      .countdown-item {
        width: calc(50% - 1rem);
        min-width: auto;
      }

      .event-details {
        flex-direction: column;
      }

      .detail-card {
        min-width: auto;
      }

      .message-card, .gift-card {
        padding: 1.5rem;
      }
    }
  `]
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  ngOnInit() {
    this.subscription = interval(1000).subscribe(() => {
      this.updateCountdown();
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private updateCountdown() {
    const weddingDate = new Date('2025-12-06T12:30:00-03:00');
    const now = new Date();
    const diff = weddingDate.getTime() - now.getTime();

    if (diff > 0) {
      this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((diff % (1000 * 60)) / 1000);
    }
  }
}