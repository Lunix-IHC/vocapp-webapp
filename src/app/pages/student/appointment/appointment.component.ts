import { Component } from '@angular/core';
import { AppointmentService, Advisor } from '../../../shared/services/appointment.service';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  standalone: true, // Si el componente es standalone
  imports: [FormsModule], // Importa FormsModule aquí
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent {
  advisors: Advisor[] = [];
  searchQuery: string = '';

  constructor(private _router: Router, private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.advisors = this.appointmentService.getAdvisors();
  }

  onSearch(): void {
    this.advisors = this.appointmentService.searchAdvisors(this.searchQuery);
  }

  navigateToConfirmarCita() {
    this._router.navigate(['home/student/Confirmacion']);
  }
}
