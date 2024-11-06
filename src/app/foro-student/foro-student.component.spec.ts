import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-foro-student',
  templateUrl: './foro-student.component.html',
  styleUrls: ['./foro-student.component.sass']
})
export class ForoStudentComponent implements OnInit {
  currentRoute: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.currentRoute = url[0]?.path || '';
    });
  }
}
