import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-1',
  standalone: true,
  imports: [],
  templateUrl: './test-1.component.html',
  styleUrl: './test-1.component.sass'
})
export class Test1Component {

  constructor(private _router: Router) { }

  navigateToNext() {
    this._router.navigate(['test-2'])
  }
  navigateToBack() {
    this._router.navigate(['acceso-test'])
  }
}
