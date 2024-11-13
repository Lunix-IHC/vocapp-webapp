import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  completed: boolean = false;

  constructor(private _router: Router, private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  get firstName() {
    return this.signupForm.get('firstName');
  }

  get lastName() {
    return this.signupForm.get('lastName');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }

  passwordMatchValidator(group: FormGroup) {
    return group.get('password')?.value === group.get('confirmPassword')?.value 
      ? null : { mismatch: true };
  }

  completeSignUp() {
    if (this.signupForm.valid) {
      this.completed = true;
      this.authService.register({
        email: this.signupForm.value.email,
        firstName: this.signupForm.value.firstName,
        lastName: this.signupForm.value.lastName,
        password: this.signupForm.value.password,
      })
    } else {
      this.signupForm.markAllAsTouched();
    }
  }

  navigateToMain() {
    this._router.navigate(['']);
  }

  navigateToSignIn() {
    this._router.navigate(['auth/sign-in'])
  }
}