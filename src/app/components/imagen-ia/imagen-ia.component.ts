import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImagenIAService } from '../../services/imagen-IA/imagen-ia.service';
import { HeaderComponent } from '../layout/header/header.component';

@Component({
  selector: 'app-imagen-ia',
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './imagen-ia.component.html',
  styleUrl: './imagen-ia.component.css',
})
export class ImagenIAComponent {
  imagenBase64: string = '';
  title: string = '';
  content: string = '';
  prompt: string = '';

  constructor(private imagenIAservice: ImagenIAService) {}

  generarImagen() {
    const prompt = this.title + " " + this.content;
  
    this.imagenIAservice.getImagenIA(prompt).subscribe({
      next: (respuestaapi) => {
        const base64 = respuestaapi.candidates[0].content.parts[1].inlineData.data;
        const mime = respuestaapi.candidates[0].content.parts[1].inlineData.mimeType || 'image/png';
  
        this.imagenBase64 = `data:${mime};base64,${base64}`;
      },
      error: (err) => {
        console.error("error", err);
        alert("error");
      },
    });
    console.log(prompt);
  }
}
