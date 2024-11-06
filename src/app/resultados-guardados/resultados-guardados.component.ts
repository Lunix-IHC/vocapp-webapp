import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  styleUrl: './resultados-guardados.component.css',
  selector: 'resultados-guardados',
  standalone: true,
  imports: [],
  templateUrl: './resultados-guardados.component.html',
  
})
export class ResultadosGuardadosComponent {
  constructor(private _router: Router) { }

  navigateToAccesoTest() {
    this._router.navigate(['acceso-test']);
  }
  
}


