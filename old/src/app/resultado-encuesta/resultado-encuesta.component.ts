import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultado-encuesta',
  standalone: true,
  imports: [],
  templateUrl: './resultado-encuesta.component.html',
  styleUrl: './resultado-encuesta.component.sass'
})
export class ResultadoEncuestaComponent {
  constructor(private _router: Router) { }

  navigateToResultadoGuardado() {
    this._router.navigate(['resultados-guardados']);
  }

  navigateToAccesoTest() {
    this._router.navigate(['acceso-test']);
  }
  
  navigateToResultadosGuardados() {
    this._router.navigate(['resultados-guardados']);
  }
}
