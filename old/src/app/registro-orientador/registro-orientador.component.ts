import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-orientador',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registro-orientador.component.html',
  styleUrl: './registro-orientador.component.css'
})
export class RegistroOrientadorComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      especialidad: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      console.log('Formulario enviado:', this.registroForm.value);
      // Aquí iría la lógica para enviar los datos al servidor
    }
  }

}
