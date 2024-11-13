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
  // loginForm: FormGroup;  
  
  // constructor(private fb: FormBuilder) {  
  //   this.loginForm = this.fb.group({  
  //     email: ['', [Validators.required, Validators.email]],  
  //     password: ['', Validators.required]  
  //   });  
  // }  
  
  ngOnInit(): void {}  
  
  // onSubmit(): void {  
  //   if (this.loginForm.valid) {  
  //     console.log(this.loginForm.value);
  //   }  
  // }

  constructor(private _router: Router) { }

  navigateToMain() {
    this._router.navigate(['']);
  }

  SignIn() {
    this._router.navigate(['home']);
  }
}
