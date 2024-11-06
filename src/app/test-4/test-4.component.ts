import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-4',
  standalone: true,
  imports: [],
  templateUrl: './test-4.component.html',
  styleUrl: './test-4.component.sass'
})
export class Test4Component {
  constructor(private _router: Router) { }

  navigateToNext() {
    this._router.navigate(['test-5'])
  }
  navigateToBack() {
    this._router.navigate(['test-3'])
  }
}
