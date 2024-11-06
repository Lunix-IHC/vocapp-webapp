import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  constructor(private _router: Router) { }

  navigateToMain() {
    this._router.navigate(['']);
  }

  SignIn() {
    this._router.navigate(['home']);
  }
}
