import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="content">
        <p>Obrigado por fazer parte desse momento especial para nós!</p>
        <p>Com amor, Lucas Solis & Suiany Racheti</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: #FAF8F1;
      padding: 2rem 0;
      margin-top: 4rem;
      text-align: center;
      color: #414B33;
    }

    .content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    p {
      margin: 0.5rem 0;
    }
  `]
})
export class FooterComponent {}