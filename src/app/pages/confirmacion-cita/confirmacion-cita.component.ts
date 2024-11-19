import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router'
@Component({
  selector: 'app-confirmacion-cita',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './confirmacion-cita.component.html',
  styleUrl: './confirmacion-cita.component.css'
})
export class ConfirmacionCitaComponent {
  completed: boolean = false;

  constructor(private _router: Router){}
  completeReserva() {
    this.completed = true;
  }

  navegacionExtra(){
    this._router.navigate(['home/student/inicio']);
  }
}
