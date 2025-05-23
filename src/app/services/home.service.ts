import { Injectable } from '@angular/core';
import { HomeModel } from '../models/home-model';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  homes: Array<HomeModel>;
  constructor() { 
    this.homes = [
      {
        titulo: 'Noticias',
        descripcion: 'Seccion Noticias',
        ruta: '/noticias',
        imagen: 'assets/img/noticias.png',
      },
      {
        titulo: 'Autos',
        descripcion: 'Seccion de Automoviles',
        ruta: '/marca-auto',
        imagen: 'assets/img/marcaAuto.png',
      },
      {
        titulo: 'Conversor',
        descripcion: 'Seccion de Conversor de Divisas',
        ruta: '/conversor',
        imagen: 'assets/img/conversor.png',
      },
      {
        titulo: 'Generador de Imagenes',
        descripcion: 'Seccion de Generador de Imagenes con IA',
        ruta: '/imagen-ia',
        imagen: 'assets/img/imagenIA.png',
      },
      {
        titulo: 'Pixeleador de Rostros',
        descripcion: 'Seccion de Pixeleador de Rostros',
        ruta: '/blur-face',
        imagen: 'assets/img/difuminador.png',
      },
      {
        titulo: 'QR',
        descripcion: 'Seccion de Generador de QR',
        ruta: '/generadorQR',
        imagen: 'assets/img/qr.png',
      }
    ];
  }
  getHomes(){
    return this.homes;
  }
}
