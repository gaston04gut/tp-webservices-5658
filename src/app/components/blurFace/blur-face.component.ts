import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlurFaceService } from '../../services/blurFace/blur-face.service';
import { HeaderComponent } from "../layout/header/header.component";

@Component({
  selector: 'app-blur-face',
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './blur-face.component.html',
  styleUrl: './blur-face.component.css'
})
export class BlurFaceComponent {

  urlImagen: string = '';
  urlImagenBlur: string = '';
  constructor(private blurfaveService: BlurFaceService) { }
 
  generarBlur(){
    this.blurfaveService.getImagenBlur(this.urlImagen).subscribe((response) => {
      this.urlImagenBlur = response.result;
    },
    (error) => {
      console.error('Error al obtener la imagen', error);
    }
  );
  
  }

}
