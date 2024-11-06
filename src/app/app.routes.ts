import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForoStudentComponent } from './foro-student/foro-student.component'; 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { InfoInstitucionesComponent } from './info-instituciones/info-instituciones.component';
import { AppComponent } from './app.component';



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
