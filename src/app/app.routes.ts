import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'signup', component: SignUpComponent },
];
