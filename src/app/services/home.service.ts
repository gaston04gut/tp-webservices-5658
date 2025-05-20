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
        imagen: 'assets/img/eje1.png',
      },
    ]
  }
  getHomes(){
    return this.homes;
  }
}
