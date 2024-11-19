import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Test, TestItem } from '../models/test.model';
import { getUniqueId } from '../utils/funtions';
import { questions_catalogue } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private currentStep = new BehaviorSubject<number>(1);
  private currentTestId: string;
  private currentTest = new BehaviorSubject<TestItem[]>([]);
  private tests: Test[] =  [];

  constructor() { }

  initNewTest() {
    this.currentStep = new BehaviorSubject<number>(1);
    this.currentTestId = getUniqueId();
    const test: TestItem[] = this.currentTest.value;
    for(let question of questions_catalogue) {
      test.push({
        question: question,
        answer: 3
      })
    }
    this.currentTest = new BehaviorSubject<TestItem[]>(test);
  }

  getStep() {
    return this.currentStep.asObservable();
  }

  setStep(step: number) {
    this.currentStep.next(step);
  }

  getCurrentTest() {
    return this.currentTest.asObservable();
  }

  getCurrentTestId() {
    return this.currentTestId;
  }

  getTests() {
    return this.tests;
  }

  getTestById(id: string) {
    return this.tests.find(x => x.id == id);
  }

  setTest(id: string, answers: TestItem[]): void {
    this.tests.push({
      id,
      answers
    })
  }
}
