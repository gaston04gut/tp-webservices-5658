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
      (response) => {
        if (response && response.currencies) {
          const models: ConversorModel[] = [];
          // Procesar la respuesta de la API en el componente
          for (const [code, name] of Object.entries(response.currencies)) {
            const model = new ConversorModel();
            model.name = name as string;
            model.currency = code;
            models.push(model);
          }
          this.curriencies = models;
          console.log('Monedas procesadas:', this.curriencies);
        } else if (response && typeof response === 'object') {
          console.log('Propiedades de la respuesta:', Object.keys(response));
        }
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
        console.error('error', error);
        alert('Error al Convertir la moneda');
        this.conversionResultado = 0;
      }
    );
  }

  ngOnInit() {
    this.cargarMonedas();
  }
}
