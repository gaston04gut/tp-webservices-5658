import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LibroModels } from '../../models/libro/libro-model';
import { LibroService } from '../../services/libro.service';

declare var bootstrap: any; // Permite a TypeScript reconocer la variable global bootstrap;
@Component({
  selector: 'app-libro',
  imports: [CommonModule, FormsModule],
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.css',
})
export class LibroComponent {
  anio!: number;
  mes!: number;
  libros: LibroModels[] = [];
  libroDetalle?: LibroModels;

  @ViewChild('miModalFacheroEnHTML') acaSeLlamaModalEnComponent!: ElementRef; //

  ngOnInit(): void {}

  constructor(private libroService: LibroService) {}

  getLibros(anio: number, mes: number) {
    this.libroService.getLibros(anio, mes).subscribe(
      (result) => {
        // Mapear los datos de la respuesta a un array de objetos LibroModels
        this.libros = result.map((element: any) => {
          const libro = new LibroModels();
          libro.position = element.position;
          libro.name = element.name;
          libro.cover = element.cover;
          libro.book_id = element.book_id;
          return libro;
        });
        //Ya obtengo los libros, ahora llamar al servicio para obtener la info de cada libro.
        //la info viene desde otra API, por lo que tengo que llamar a otro servicio.
        this.libros.forEach((libro) => {
          // Iterar sobre cada libro, libros ya defenidos anteriormente
          this.libroService.getInfoLibro(parseInt(libro.book_id)).subscribe(
            (detalles: any) => {
              libro.name = detalles.name;
              libro.author = detalles.authors[0];
              libro.sinopsis = detalles.synopsis;
            },
            (error) => {
              console.error('Error al obtener la info del libro:', error);
            }
          );
        });
      },

      (error) => {
        console.error('Error al obtener los libros:', error);
      }
    );
  }
  getInfoLibro(id: string, event: Event) {
    //modal de bootstrap
    // Lógica para obtener la info del libro con el ID dado

    event.preventDefault(); // Evita que el enlace se siga

    this.libroService.getInfoLibro(parseInt(id)).subscribe(
      (result: any) => {
        this.libroDetalle = new LibroModels();
        this.libroDetalle.name = result.name;
        this.libroDetalle.sinopsis = result.synopsis;
        this.libroDetalle.author = result.authors[0];

        const modalElement = this.acaSeLlamaModalEnComponent.nativeElement; // modalRef es del ViewChild. Es el elemento del DOM que representa el modal
        const modalInstance = new bootstrap.Modal(modalElement);
        modalInstance.show();
      },
      (error) => {
        console.error('Error al obtener la info del libro:', error);
      }
    );
  }
}
