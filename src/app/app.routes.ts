import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { NoticiasComponent } from './components/noticias/noticias.component';

export const routes: Routes = [
  {    path: '',
    component: HomeComponent, },
  {
    path: 'noticias',
    component: NoticiasComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];
