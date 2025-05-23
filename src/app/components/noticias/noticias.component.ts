import { Component } from '@angular/core';
import { NoticiasService } from '../../services/noticias/noticias.service';
import { NoticiaModel } from '../../models/noticia-model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../layout/header/header.component';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css',
})
export class NoticiasComponent {
  news: NoticiaModel[] = [];
  new!: NoticiaModel;
  categoriaSeleccionada: string = 'WORLD';
  categorias = [
    { nombre: 'Mundo', valor: 'WORLD' },
    { nombre: 'Negocios', valor: 'BUSINESS' },
    { nombre: 'Tecnología', valor: 'TECHNOLOGY' },
    { nombre: 'Salud', valor: 'HEALTH' },
    { nombre: 'Ciencia', valor: 'SCIENCE' },
    { nombre: 'Entretenimiento', valor: 'ENTERTAINMENT' },
    { nombre: 'Deportes', valor: 'SPORTS' },
  ];

  constructor(private noticiasService: NoticiasService) {}

  cargarNoticias(categoria: string) {
    this.noticiasService.getNoticias(categoria).subscribe(
      (result) => {
        this.news = result.data.map((element: any) => {
          //el resultado de la api es un array de objetos, success, total y data
          // //data es un array de objetos, cada objeto es una noticia
          console.log(element);
          const noticia = new NoticiaModel();

          noticia.title = element.title;
          noticia.description = element.description;

          noticia.thumbnail = element.thumbnail;
          noticia.link = element.url;
          noticia.date = element.date;

          return noticia;
        });
        console.log(this.news);
      },
      (error) => {
        alert('Error al cargar las noticias');
        console.log(error);
      }
    );
  }
  ngOnInit() {
    this.cargarNoticias('WORLD');
  }
}
