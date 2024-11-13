import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarStudentComponent } from '../navbar-student/navbar-student.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, NavbarStudentComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

}