import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TestService } from '../../../../shared/services/test.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Answer } from '../../../../shared/models/answer';

@Component({
  selector: 'app-test-1',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './test-1.component.html',
  styleUrls: ['./test-1.component.css']
})
export class Test1Component implements OnInit {
  step: number = 1;
  answers: Array<{ q1: number; q2: number; q3: number }> = [];

  constructor(private _router: Router, private testService: TestService) {}

  ngOnInit() {
    this.testService.getStep().subscribe((step) => {
      this.step = step;
    });
    this.testService.getAnswers().subscribe((answers) => {
      this.answers = answers;
    });
  }

  navigateToNext() {
    console.log(this.step);
    if (this.step < 5) {
      this.testService.setStep(this.step + 1);
    } else {
      this._router.navigate(['home/student/resultados-guardados']);
    }
  }

  navigateToBack() {
    if (this.step > 1) {
      this.testService.setStep(this.step - 1);
    } else {
      this._router.navigate(['home/student/test']);
    }
  }

  onSliderChange(question: keyof Answer, value: number) {
    this.testService.setAnswer(this.step - 1, question, value);
  }
}