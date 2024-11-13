import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/main/main.routes').then(x => x.MainRoutes)
    },
    {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.routes').then(x => x.AuthRoutes)
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
        redirectTo: '',
    }
];

// para rutas protegidas agregar canActivate: [AuthGuard]
