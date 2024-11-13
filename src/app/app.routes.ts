import { Routes } from '@angular/router';

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
        path: 'student',
        loadChildren: () => import('./pages/student/student.routes').then(x=>x.studentRoutes)
    },

    {
        path: '**',
        redirectTo: '',
    }
];

// para rutas protegidas agregar canActivate: [AuthGuard]
