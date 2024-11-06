import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SolicitarCitaComponent } from './solicitar-cita/solicitar-cita.component';
import { RegistroOrientadorComponent } from './registro-orientador/registro-orientador.component';
import { AsignacionDeOrientadorComponent } from './asignacion-de-orientador/asignacion-de-orientador.component';
import { PerfilEstudianteComponent } from './perfil-estudiante/perfil-estudiante.component';


export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'solicitar-cita', component: SolicitarCitaComponent },
  { path: 'registro-orientador', component: RegistroOrientadorComponent },
  { path: 'asignacion-de-orientador', component: AsignacionDeOrientadorComponent },
  { path: 'perfil-estudiante', component: PerfilEstudianteComponent },
];
