import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Answer {
  q1: number;
  q2: number;
  q3: number;
}

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private currentStep = new BehaviorSubject<number>(1);
  private answers: number[] = Array(30).fill(1);

  constructor() {}

  getStep() {
    return this.currentStep.asObservable();
  }

  setStep(step: number) {
    this.currentStep.next(step);
  }

  getAnswers() {
    return this.answers;
  }

  setAnswers(newAnswers: number[]): void {
    if (newAnswers.length!=30){
      this.answers = Array(30).fill(1);
    }else{
    this.answers = [...newAnswers];
    }
  }
}
