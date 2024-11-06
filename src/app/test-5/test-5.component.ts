import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-5',
  standalone: true,
  imports: [],
  templateUrl: './test-5.component.html',
  styleUrl: './test-5.component.sass'
})
export class Test5Component {
  constructor(private _router: Router) { }

  navigateToNext() {
    this._router.navigate(['resultado-encuesta'])
  }
  navigateToBack() {
    this._router.navigate(['test-4'])
  }
}
