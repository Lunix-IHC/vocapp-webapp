import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/main/main.routes').then(x => x.MainRoutes)
    },
    {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.routes').then(x => x.AuthRoutes)
    }
];

// para rutas protegidas agregar canActivate: [AuthGuard]
