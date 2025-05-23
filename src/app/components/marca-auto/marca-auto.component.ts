import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core'; // Importa OnInit
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../layout/header/header.component';
import { MarcaAutoModel } from '../../models/marca-auto/marca-auto-model';
import { ModeloAutoModel } from '../../models/marca-auto/modelo-auto-model';
import { MarcaAutoService } from '../../services/marca-auto/marca-auto.service';

declare var bootstrap: any; // Permite a TypeScript reconocer la variable global bootstrap

@Component({
  selector: 'app-marca-auto',
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './marca-auto.component.html',
  styleUrl: './marca-auto.component.css',
})
export class MarcaAutoComponent implements OnInit {
  // Implementa OnInit
  marcasAutos: MarcaAutoModel[] = [];
  modelosAutos: ModeloAutoModel[] = [];
  marcaID?: string; // Permite undefined para la opción por defecto del select
  selectedMarcaName: string = ''; // Para mostrar el nombre de la marca en el título del modal
  isLoadingModelos: boolean = false;

  constructor(private marcaService: MarcaAutoService) {}

  ngOnInit() {
    // Método del ciclo de vida de Angular, se ejecuta al inicializar el componente
    this.cargarMarcas();
  }

  cargarMarcas() {
    this.marcaService.getMarcasAuto().subscribe(
      (result) => {
        this.marcasAutos = result.map((element: any) => {
          const marca = new MarcaAutoModel();
          Object.assign(marca, element);
          return marca;
        });
        console.log('Marcas cargadas:', this.marcasAutos);
      },
      (error) => {
        console.error('Error al cargar las marcas:', error);
        alert(
          'Error al cargar las marcas. Revisa la consola para más detalles.'
        );
      }
    );
  }

  cargarModelos(marcaID?: string) {
    if (!marcaID) {
      this.modelosAutos = [];
      this.selectedMarcaName = '';
      console.log('No se seleccionó marcaID, limpiando modelos.');
      return;
    }

    const marcaSeleccionada = this.marcasAutos.find((m) => m.id === marcaID);
    this.selectedMarcaName = marcaSeleccionada?.name || 'Marca Desonocida';
    console.log(
      `Cargando modelos para marcaID: ${marcaID}, Nombre: ${this.selectedMarcaName}`
    );

    this.isLoadingModelos = true; // Indica que se están cargando los modelos

    this.marcaService.getModelosAuto(marcaID).subscribe({
      next: (result) => {
        this.modelosAutos = result.map((element: any) => {
          const modelo = new ModeloAutoModel();
          modelo.idModelo = element.id;
          modelo.nameModelo = element.name;
          return modelo;
        });
        console.log('Modelos cargados:', this.modelosAutos);
        if (this.modelosAutos.length > 0) {
          this.mostrarModalConBootstrap();
        } else {
          alert(`No se encontraron modelos para ${this.selectedMarcaName}.`);
        }
      },
      error: (error) => {
        console.error('Error al cargar los modelos:', error);
        alert(
          `Error al cargar los modelos para ${this.selectedMarcaName}. Revisa la consola.`
        );
      },
      complete: () => {
        this.isLoadingModelos = false; // Indica que se han cargado los modelos
      },
    });
  }

  
  // Función de prueba para el botón, también la usa cargarModelos
  mostrarModalConBootstrap() {
    const modalElement = document.getElementById('modelosModal');

    if (!modalElement) {
      console.error(
        'Error: Elemento del modal con ID "modelosModal" no encontrado en el DOM.');
      alert('Error: No se encontró el elemento del modal. Verifica el HTML.');
      return;
    }

    // Verificar si Bootstrap está cargado
    if (typeof bootstrap !== 'undefined' && bootstrap.Modal) {
      try {
        const modalInstance = new bootstrap.Modal(modalElement);
        modalInstance.show();
        console.log('Modal mostrado exitosamente.');
      } catch (e) {
        console.error(
          'Error al instanciar o mostrar el modal de Bootstrap:',
          e
        );
        alert(
          'Ocurrió un error al intentar mostrar el modal. Revisa la consola.'
        );
      }
    } else {
      console.error(
        'Error: Bootstrap JS o bootstrap.Modal no está definido. Asegúrate de que Bootstrap JS esté correctamente cargado y que hayas reiniciado `ng serve` después de cambios en `angular.json`.'
      );
      alert(
        'Error: Bootstrap no parece estar cargado. Verifica la configuración y reinicia el servidor.'
      );
    }
  }
}
