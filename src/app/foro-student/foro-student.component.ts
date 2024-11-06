import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-foro-student',
  templateUrl: './foro-student.component.html',
  styleUrls: ['./foro-student.component.css']
})
export class ForoStudentComponent implements OnInit {
  currentRoute: string | undefined;

  constructor(private route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    // Obtenemos el nombre de la ruta activa
    this.route.url.subscribe(url => {
      this.currentRoute = url[0].path;
    });
  }

  navigateToTest() {
    this._router.navigate(['acceso-test']);
  }

  navigateToCommunity() {
    this._router.navigate(['community']);
  }

  navigateToExplorer() {
    this._router.navigate(['explorer']);
  }

  navigateToSolicitarCita() {
    this._router.navigate(['solicitar-cita']);
  }

  navigateToForos() {
    this._router.navigate(['forums']);
  }

  navigateToWorkShops() {
    this._router.navigate(['talleres']);
  }

  navigateToStories() {
    this._router.navigate(['historias']);
  }
}
