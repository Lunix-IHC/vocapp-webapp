import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-student',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-student.component.html',
  styleUrl: './navbar-student.component.css'
})
export class NavbarStudentComponent {

}
