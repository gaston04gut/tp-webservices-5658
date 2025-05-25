import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { MarcaAutoComponent } from './components/marca-auto/marca-auto.component';
import { ConversorComponent } from './components/conversor/conversor.component';
import { ImagenIAComponent } from './components/imagen-ia/imagen-ia.component';
import { BlurFaceComponent } from './components/blurFace/blur-face.component';
import { GeneradorQRComponent } from './components/generador-qr/generador-qr.component';
import { LibroComponent } from './components/libro/libro.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'noticias',
    component: NoticiasComponent,
  },
  {
    path: 'marca-auto',
    component: MarcaAutoComponent,
  },
  {
    path: 'conversor',
    component: ConversorComponent,
  },
  {
    path: 'imagen-ia',
    component: ImagenIAComponent,
  },
  {
    path: 'blur-face',
    component: BlurFaceComponent,
  },
  {
    path: 'generadorQR',
    component: GeneradorQRComponent, // Asegúrate de que el nombre del componente sea correcto
  },
  {
    path: 'libro',
    component: LibroComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
