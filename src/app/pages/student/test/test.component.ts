import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TestService } from '../../../shared/services/test.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  constructor(private _router: Router, private testService: TestService) { }
  navigateToForo(){
    this._router.navigate(['/home/student/foro'])
  }

  navigateToNewTest(){
    this.testService.setStep(1);
    this.testService.setAnswers([0]);
    
    this._router.navigate(['/home/student/preguntas'])
  }
  navigateToTest(){
    this._router.navigate(['/home/student/preguntas'])
  }
  navigateToResults(){
    this._router.navigate(['/home/student/results'])
  }

}
