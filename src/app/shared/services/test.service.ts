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
  private answers = new BehaviorSubject<Answer[]>([
    { q1: 0, q2: 0, q3: 0 },
    { q1: 0, q2: 0, q3: 0 },
    { q1: 0, q2: 0, q3: 0 },
    { q1: 0, q2: 0, q3: 0 },
    { q1: 0, q2: 0, q3: 0 }
  ]);

  constructor() {}

  getStep() {
    return this.currentStep.asObservable();
  }

  setStep(step: number) {
    this.currentStep.next(step);
  }

  getAnswers() {
    return this.answers.asObservable();
  }

  setAnswer(step: number, question: keyof Answer, value: number) {
    const currentAnswers = this.answers.value;
    currentAnswers[step - 1][question] = value;
    this.answers.next([...currentAnswers]);
  }

  getAnswer(step: number, question: keyof Answer) {
    return this.answers.value[step - 1][question];
  }
}
