import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private _router: Router, private fb: FormBuilder) {}
  
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
      // Aquí puedes agregar tu lógica de autenticación
      console.log('Form válido');
      this._router.navigate(['home']);
    } else {
      console.log('Form no válido');
      this.signInForm.markAllAsTouched();  // Muestra mensajes de error en campos
    }
  }
}