import { Component } from '@angular/core';
import { NoticiasService } from '../../services/noticias/noticias.service';
import { NoticiaModel } from '../../models/noticia-model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-noticias',
  imports: [CommonModule, FormsModule],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css',
})
export class NoticiasComponent {
  news!: Array<NoticiaModel>;
  new!: NoticiaModel;
  categoriaSeleccionada: string = 'WORLD';
  categorias = [
    {nombre: 'Mundo', valor: 'WORLD'},
    { nombre: 'Negocios', valor: 'BUSINESS' },
    { nombre: 'Tecnología', valor: 'TECHNOLOGY' },
    { nombre: 'Salud', valor: 'HEALTH' },
    { nombre: 'Ciencia', valor: 'SCIENCE' },
    { nombre: 'Deportes', valor: 'SPORTS' },
  ];


  constructor(private noticiasService: NoticiasService) {}
  
  cargarNoticias(categoria: string) {
    this.noticiasService.getNoticias(categoria).subscribe(
      (result) => {
        this.news = new Array<NoticiaModel>();
        result.data.forEach((element: any) => {
          const noticia = new NoticiaModel();

          noticia.title = element.title;
          noticia.snippet = element.snippet;

          // Acceder a la imagen correctamente:
          noticia.photo_url = element.photo_url;

          this.news.push(noticia);
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
