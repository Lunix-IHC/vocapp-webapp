import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForoStudentComponent } from './foro-student/foro-student.component'; 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SolicitarCitaComponent } from './solicitar-cita/solicitar-cita.component';
import { RegistroOrientadorComponent } from './registro-orientador/registro-orientador.component';
import { PerfilEstudianteComponent } from './perfil-estudiante/perfil-estudiante.component';


export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'home', component: ForoStudentComponent },
  { path: 'forums', component: ForoStudentComponent},
  { path: 'community', component: ForoStudentComponent },
  { path: 'forums', component: ForoStudentComponent },
  { path: 'forum-post', component: ForoStudentComponent},
  { path: 'solicitar-cita', component: SolicitarCitaComponent },
  { path: 'registro-orientador', component: RegistroOrientadorComponent },
  { path: 'perfil-estudiante', component: PerfilEstudianteComponent },
];

@NgModule({
  declarations: [
    ForoStudentComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: []
})
export class AppModule { }
