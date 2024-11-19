import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { TestService } from '../../../shared/services/test.service';
import { Test } from '../../../shared/models/test.model';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent implements OnInit {
  tests: Test[] = [];

  constructor(private _router: Router, private testService: TestService) { }

  ngOnInit() {
    this.tests = this.testService.getTests()
  }

  navigateToResults(id: string){
    this._router.navigate(['/home/student/show-results/' + id])
  }
}
