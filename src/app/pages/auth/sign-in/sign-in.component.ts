import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { User } from '../../../shared/models/user';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private _router: Router, private fb: FormBuilder, private authService: AuthService) {}
  
  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get email() {
    return this.signInForm.get('email');
  }

  get password() {
    return this.signInForm.get('password');
  }

  navigateToMain() {
    this._router.navigate(['']);
  }

  SignIn() {
    if (this.signInForm.valid) {
      const user: Partial<User> = { 
        email: this.signInForm.value.email,
        password: this.signInForm.value.password
      };
      const success = this.authService.login(user);
      if (success) {
        console.log('Form válido');
        this._router.navigate(['home']);
      } else {
        alert("El usuario o contraseña son incorrectos");
      }
    } else {
      console.log('Form no válido');
      this.signInForm.markAllAsTouched();
    }
  }
}