import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../layout/header/header.component';
import { ConversorModel } from '../../models/conversor/conversor-model';
import { ConversorService } from '../../services/conversor/conversor.service';

@Component({
  selector: 'app-conversor',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './conversor.component.html',
  styleUrl: './conversor.component.css',
})
export class ConversorComponent {
  curriencies: ConversorModel[] = [];
  conversionResultado: number = 0;
  montoInput: string = '';
  monedaOrigen: string = '';
  monedaDestino: string = '';

  constructor(private conversorService: ConversorService) {}

  cargarMonedas() {
    this.conversorService.getPaises().subscribe(
      (result) => {
        this.curriencies = result;
        console.log(this.curriencies);
      },
      (error) => {
        alert('Error al cargar las monedas');
        console.error('Error al cargar las monedas:', error);
      }
    );
  }

  convertirMoneda(from: string, to: string, amount: string) {
    this.conversorService.convertirMoneda(from, to, amount).subscribe(
      (result: number) => {
        this.conversionResultado = result;
      },
      (error) => {
        console.error("error", error);
        alert("OCAS")
      }
    );
  }

  ngOnInit() {
    this.cargarMonedas();
  }
}
