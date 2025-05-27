import { CommonModule } from '@angular/common';
import { Component,ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PeliculaService } from '../../../services/practica/pelicula.service';
import { PeliculaModel } from '../../../models/practica/pelicula-model';


declare var bootstrap: any;
@Component({
  selector: 'app-pelicula',
  imports: [CommonModule, FormsModule],
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class PeliculaComponent {
  peliculas: PeliculaModel[] = [];
  peliculaDetalle?: PeliculaModel;
  @ViewChild('miModalFacheroEnHTML') acaSeLlamaModalEnComponent!: ElementRef;
  constructor(private peliculaService: PeliculaService) {}

  ngOnInit() {
    this.getPeliculas();
  }

  getPeliculas(){
    this.peliculaService.getPeliculas().subscribe((data: any) => {
      console.log(data);
      this.peliculas = data.map((peli: any) => {
      const  pelicula = new PeliculaModel();
        pelicula.id = peli.id;
        pelicula.url = peli.url;
        pelicula.primaryTitle = peli.primaryTitle;
        pelicula.primaryImage = peli.primaryImage;
        return pelicula;
      })
    },
    (error)=>{
      console.log(error);
    }
  );
  }

  getPeliculaInfo(id: string, event: Event){
    event.preventDefault();
    this.peliculaService.getPeliculaInfo(id).subscribe((data: any) => {
      this.peliculaDetalle = new PeliculaModel();
      this.peliculaDetalle.primaryTitle = data.primaryTitle;
      this.peliculaDetalle.description = data.description;
      this.peliculaDetalle.interest = data.interests;
      this.peliculaDetalle.genres = data.genres;
      this.peliculaDetalle.director = data.directors[0].fullName;

      const modalElement = this.acaSeLlamaModalEnComponent.nativeElement; // modalRef es del ViewChild. Es el elemento del DOM que representa el modal
      const modalInstance = new bootstrap.Modal(modalElement);
      modalInstance.show();
      console.log(this.peliculaDetalle);
    },
    (error)=>{
      console.log(error);
    }
  );
  }
}