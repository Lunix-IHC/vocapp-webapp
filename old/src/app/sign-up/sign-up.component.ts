import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.sass'
})
export class SignUpComponent {
  completed: boolean = false;

  constructor(private _router: Router) { }

  navigateToMain() {
    this._router.navigate(['']);
  }

  navigateToSignIn() {
    this._router.navigate(['signin'])
  }

  completeSignUp() {
    this.completed = true;
  }
}
