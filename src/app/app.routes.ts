import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { AlreadyLoggedInGuard } from './shared/guards/already-loggedin.guard';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/main/main.routes').then(x => x.MainRoutes),
        canActivate: [AlreadyLoggedInGuard]
    },
    {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.routes').then(x => x.AuthRoutes),
        canActivate: [AlreadyLoggedInGuard]
    },
    {
        path: 'home',
        component: LayoutComponent,
        children: [
          { path: '', component: HomeComponent },
          { path: 'student', loadChildren: () => import('./pages/student/student.routes').then(x=>x.studentRoutes) },
         
        ],
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: 'auth/sign-in',
    }
];
