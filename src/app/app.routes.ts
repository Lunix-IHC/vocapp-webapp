import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RegistroOrientadorComponent } from './registro-orientador/registro-orientador.component';
import { AsignacionDeOrientadorComponent } from './asignacion-de-orientador/asignacion-de-orientador.component';
import { ResultadosGuardadosComponent } from './resultados-guardados/resultados-guardados.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'registro-orientador', component: RegistroOrientadorComponent },
  { path: 'asignacion-de-orientador', component: AsignacionDeOrientadorComponent },
  { path: 'resultados-guardados', component: ResultadosGuardadosComponent },
];
