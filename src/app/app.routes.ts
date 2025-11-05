import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VenueComponent } from './pages/venue/venue.component';
import { GiftRegistryComponent } from './pages/gift-registry/gift-registry.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'local', component: VenueComponent },
  { path: 'presentes', component: GiftRegistryComponent },
  { path: '**', redirectTo: '' }
];