import { Component } from '@angular/core';
import { NavbarStudentComponent } from "../../../shared/components/navbar-student/navbar-student.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-layout',
  standalone: true,
  imports: [NavbarStudentComponent,RouterModule],
  templateUrl: './student-layout.component.html',
  styleUrl: './student-layout.component.css'
})
export class StudentLayoutComponent {

}
