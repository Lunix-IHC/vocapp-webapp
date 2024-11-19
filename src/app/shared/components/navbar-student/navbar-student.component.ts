import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar-student',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-student.component.html',
  styleUrl: './navbar-student.component.css'
})
export class NavbarStudentComponent {

  constructor(private authService: AuthService) { }

  cerrarSesion() {
    this.authService.logout();
  }
}
