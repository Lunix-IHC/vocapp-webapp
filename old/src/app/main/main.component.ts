import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.sass'
})
export class MainComponent {
  constructor(private _router: Router) { }

  navigateToSignIn() {
    this._router.navigate(['signin'])
  }
  
  navigateToSignUp() {
    this._router.navigate(['signup']);
  }
}
