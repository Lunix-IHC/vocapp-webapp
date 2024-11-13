import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-1',
  standalone: true,
  imports: [],
  templateUrl: './test-1.component.html',
  styleUrl: './test-1.component.css'
})
export class Test1Component {
  step:number=1;
  constructor(private _router: Router) { }


  navigateToNext() {
    if(this.step>4){
      this._router.navigate(['home/student/resultados-guardados']);
    }
    else{
      this.step++;
    }
  }
  navigateToBack() {
    if(this.step<2){
      this._router.navigate(['home/student/test']);
    }
    else{
      this.step--;
    }
  }
}
