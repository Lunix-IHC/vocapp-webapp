import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil-estudiante',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './perfil-estudiante.component.html',
  styleUrl: './perfil-estudiante.component.sass'
})
export class PerfilEstudianteComponent {

  studentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      email: ['', [Validators.required, Validators.email]],
      grade: ['', Validators.required],
      bio: ['']
    });
  }

  onSubmit() {
    if (this.studentForm.valid) {
      console.log("Perfil actualizado:", this.studentForm.value);
    } else {
      console.log("Formulario inválido");
    }
  }
}