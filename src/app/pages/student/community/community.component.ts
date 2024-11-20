import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css'
})
export class CommunityComponent {
  constructor(private _router: Router) { }

  navigateToForo(){
    this._router.navigate(['/home/student/foro'])
  }
}
