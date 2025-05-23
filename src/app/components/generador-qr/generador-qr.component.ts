import { Component } from '@angular/core';
import { GeneradorQRService } from '../../services/generadorQR/generador-qr.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from "../home/home/home.component";
import { HeaderComponent } from "../layout/header/header.component";

@Component({
  selector: 'app-generador-qr',
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './generador-qr.component.html',
  styleUrl: './generador-qr.component.css'
})
export class GeneradorQRComponent {
  texto: string = '';
  qrCode: string = '';

  constructor(private qrService: GeneradorQRService) { }

  generarQR() {
    this.qrService.generarQR(this.texto).subscribe((result)=>{
      this.qrCode = result.data.content;
    })
    console.log(this.qrCode)
    
  }

}
