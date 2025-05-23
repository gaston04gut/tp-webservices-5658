import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Ejercicio {
  ruta: string;
  nombre: string;
}
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  ejercicios: Ejercicio[] = [
    {
      ruta: '/noticias',
      nombre: 'Noticias',
    },
    {
      ruta: '/marca-auto',
      nombre: 'Marcas de Autos',
    },
    {
      ruta: '/conversor',
      nombre: 'Conversor de Divisas',
    },
    {
      ruta: '/imagen-ia',
      nombre: 'Generar Imagen con IA',
    },
    {
      ruta: '/blur-face',
      nombre: 'Blur de Rostro',
    },
    {
      ruta: '/generadorQR',
      nombre: 'Generador de QR',
    }
  ];
}
