import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RegistroOrientadorComponent } from './registro-orientador/registro-orientador.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'registro-orientador', component: RegistroOrientadorComponent },
];
