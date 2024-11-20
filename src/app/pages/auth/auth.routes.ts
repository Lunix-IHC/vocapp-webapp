import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const AuthRoutes: Routes = [
    {
        path: '',
        children: [
            { path: 'sign-in', component: SignInComponent },
            { path: 'sign-up', component: SignUpComponent },
        ]
    }
];
