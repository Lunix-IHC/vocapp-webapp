import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  constructor(private _router: Router) { }
  navigateToTest(){
    this._router.navigate(['/home/student/preguntas'])
  }

}
