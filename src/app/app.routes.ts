import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './pages/home/home.component';

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
        ],
        canActivate: [AuthGuard]
    },
];
