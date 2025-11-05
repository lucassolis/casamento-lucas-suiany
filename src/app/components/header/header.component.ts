import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header class="header">
      <nav>
        <div class="logo">
          <h1>Lucas Solis & Suiany Racheti</h1>
          <p>06/12/2025</p>
        </div>
        <ul class="nav-links">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Página Inicial</a></li>
          <li><a routerLink="/local" routerLinkActive="active">Local da Festa</a></li>
          <li><a routerLink="/presentes" routerLinkActive="active">Lista de Presentes</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background-color: #FAF8F1;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      z-index: 1000;
    }

    nav {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      text-align: center;
    }

    .logo h1 {
      color: #414B33;
      margin: 0;
      font-size: 1.5rem;
    }

    .logo p {
      color: #94A678;
      margin: 0.5rem 0 0;
    }

    .nav-links {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 2rem;
    }

    .nav-links a {
      color: #414B33;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s;
    }

    .nav-links a:hover, .nav-links a.active {
      color: #94A678;
    }

    @media (max-width: 768px) {
      nav {
        flex-direction: column;
        gap: 1rem;
      }

      .nav-links {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
    }
  `]
})
export class HeaderComponent {}