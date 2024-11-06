import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-3',
  standalone: true,
  imports: [],
  templateUrl: './test-3.component.html',
  styleUrl: './test-3.component.sass'
})
export class Test3Component {
  constructor(private _router: Router) { }

  navigateToNext() {
    this._router.navigate(['test-4'])
  }
  navigateToBack() {
    this._router.navigate(['test-2'])
  }
}
