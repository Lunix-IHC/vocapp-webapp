import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TestService } from '../../../../shared/services/test.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TestItem } from '../../../../shared/models/test.model';

@Component({
  selector: 'app-test-1',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './test-1.component.html',
  styleUrls: ['./test-1.component.css']
})

export class Test1Component implements OnInit {
  step: number = 1;
  test: TestItem[] = [];
  testId: string;
  
  constructor(private _router: Router, private testService: TestService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.testService.getStep().subscribe((step) => {
      this.step = step;
    });
    this.testService.getCurrentTest().subscribe((currentTest) => {
      this.test = currentTest;
    });
    this.activatedRoute.params.subscribe(params => this.testId = params['id']);
  }

  get groupedQuestions(): TestItem[][] {
    const groupSize = 5;
    const groups: TestItem[][] = [];
    for (let i = 0; i < this.test.length; i += groupSize) {
      groups.push(this.test.slice(i, i + groupSize));
    }
    return groups;
  }

  updateAnswer(index: number, groupIndex: number, event: Event): void {
    const newValue = +(event.target as HTMLInputElement).value;
    this.groupedQuestions[groupIndex][index].answer = newValue;
  }
  
  navigateToNext() {
    console.log(this.step);
    if (this.step < 6) {
      this.testService.setStep(this.step + 1);
    } else {
      this.testService.setTest(this.testId, this.test);
      this._router.navigate(['home/student/show-results/'+ this.testId]);
    }
  }

  navigateToBack() {
    if (this.step > 1) {
      this.testService.setStep(this.step - 1);
    } else {
      this._router.navigate(['home/student/test']);
    }
  }
}