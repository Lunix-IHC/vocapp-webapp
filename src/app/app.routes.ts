import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForoStudentComponent } from './foro-student/foro-student.component'; 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { InfoInstitucionesComponent } from './info-instituciones/info-instituciones.component';
import { AppComponent } from './app.component';

import { SolicitarCitaComponent } from './solicitar-cita/solicitar-cita.component';
import { RegistroOrientadorComponent } from './registro-orientador/registro-orientador.component';

import { AccesoTestComponent } from './acceso-test/acceso-test.component';
import { Test1Component } from './test-1/test-1.component';
import { Test2Component } from './test-2/test-2.component';
import { Test3Component } from './test-3/test-3.component';
import { Test4Component } from './test-4/test-4.component';
import { Test5Component } from './test-5/test-5.component';
import { ResultadoEncuestaComponent } from './resultado-encuesta/resultado-encuesta.component';
import { AsignacionDeOrientadorComponent } from './asignacion-de-orientador/asignacion-de-orientador.component';
import { ResultadosGuardadosComponent } from './resultados-guardados/resultados-guardados.component';
import { PerfilEstudianteComponent } from './perfil-estudiante/perfil-estudiante.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'home', component: ForoStudentComponent },
  { path: 'forums', component: ForoStudentComponent},
  { path: 'community', component: ForoStudentComponent },
  { path: 'forums', component: ForoStudentComponent },
  { path: 'forum-post', component: ForoStudentComponent},
  { path: 'universidades', component: InfoInstitucionesComponent },
  { path: 'error', component: InfoInstitucionesComponent },
  { path: 'solicitar-cita', component: SolicitarCitaComponent },
  { path: 'registro-orientador', component: RegistroOrientadorComponent },
  { path: 'acceso-test', component: AccesoTestComponent},
  { path: 'test-1', component: Test1Component},
  { path: 'test-2', component: Test2Component},
  { path: 'test-3', component: Test3Component},
  { path: 'test-4', component: Test4Component},
  { path: 'test-5', component: Test5Component},
  { path: 'resultado-encuesta', component: ResultadoEncuestaComponent},
  { path: 'asignacion-de-orientador', component: AsignacionDeOrientadorComponent },
  { path: 'resultados-guardados', component: ResultadosGuardadosComponent },
  { path: 'perfil-estudiante', component: PerfilEstudianteComponent },
];

@NgModule({
  declarations: [
    ForoStudentComponent,
    InfoInstitucionesComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
})
export class AppModule { }
