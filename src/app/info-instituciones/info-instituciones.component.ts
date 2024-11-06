import { Component } from '@angular/core';

@Component({
  selector: 'app-info-instituciones',
  templateUrl: './info-instituciones.component.html',
  styleUrls: ['./info-instituciones.component.css']
})
export class InfoInstitucionesComponent {
  universidades = [
    { nombre: 'Universidad Peruana de Ciencias Aplicadas', color: 'red' },
    { nombre: 'Universidad de Lima', color: 'yellow' },
    { nombre: 'Universidad San Ignacio de Loyola', color: 'blue' },
    { nombre: 'Universidad Tecnologica del Peru', color: 'red' }
  ];

  showError = false;

  mostrarDetalles(universidad: any) {
    if (universidad.nombre === 'Universidad Peruana de Ciencias Aplicadas') {
      this.showError = true;
    }
  }

  volver() {
    this.showError = false;
  }

  getColorClass(universidad: any) {
    return {
      'bg-red': universidad.color === 'red',
      'bg-yellow': universidad.color === 'yellow',
      'bg-blue': universidad.color === 'blue'
    };
  }
}
