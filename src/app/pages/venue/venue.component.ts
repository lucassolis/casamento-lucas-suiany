import { Component } from '@angular/core';

@Component({
  selector: 'app-venue',
  standalone: true,
  template: `
    <div class="venue-container">
      <h1>Local da Festa</h1>
      <div class="venue-info">
        <p>Endereço: Rua Embirataí, 376, Jardim Santa Maria</p>
        <div class="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7314.8242181888045!2d-46.50814200446533!3d-23.553638105807458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce67453f5cac55%3A0xf419d6c984c5e0be!2sRua%20Embirata%C3%AD%2C%20376%20-%20Jardim%20Santa%20Maria%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003576-000!5e0!3m2!1spt-BR!2sbr!4v1762297185489!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="500"
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
      <div class="confirmation-message">
        <p>Confirme sua presença até o dia 20/11/2025.</p>
      </div>
    </div>
  `,
  styles: [`
    .confirmation-message {
      margin-top: 2rem;
      padding: 1rem;
      background-color: #94A678;
      border-radius: 8px;
      text-align: center;
    }

    .confirmation-message p {
      color: #FAF8F1 !important;
      font-size: 1.2rem;
      font-weight: bold;
      margin: 0;
    }
    .venue-container {
      max-width: 1200px;
      margin: 80px auto 0;
      padding: 2rem;
    }

    h1 {
      color: #414B33;
      text-align: center;
      margin-bottom: 2rem;
    }

    .venue-info {
      max-width: 800px;
      margin: 0 auto;
    }

    .venue-info p {
      color: #414B33;
      text-align: center;
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }

    .map-container {
      width: 100%;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    @media (max-width: 768px) {
      .map-container iframe {
        height: 300px;
      }
    }
  `]
})
export class VenueComponent {}