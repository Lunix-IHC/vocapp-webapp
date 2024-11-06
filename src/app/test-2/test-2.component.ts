import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-2',
  standalone: true,
  imports: [],
  templateUrl: './test-2.component.html',
  styleUrl: './test-2.component.sass'
})
export class Test2Component {
  constructor(private _router: Router) { }

  navigateToNext() {
    this._router.navigate(['test-3'])
  }
  navigateToBack() {
    this._router.navigate(['test-1'])
  }
}
