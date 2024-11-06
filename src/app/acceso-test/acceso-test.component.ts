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

  navigateToTest() {
    this._router.navigate(['test-1'])
  }

}
