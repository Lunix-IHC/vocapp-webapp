import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceso-test',
  standalone: true,
  imports: [],
  templateUrl: './acceso-test.component.html',
  styleUrl: './acceso-test.component.sass'
})
export class AccesoTestComponent {

  constructor(private _router: Router) { }

  navigateToHome() {
    this._router.navigate(['home'])
  }

  navigateToTest() {
    this._router.navigate(['test-1'])
  }
  navigateToResultadoEncuesta() {
    this._router.navigate(['resultado-encuesta'])
  }

}
