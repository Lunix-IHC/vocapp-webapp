import { Routes } from '@angular/router';
import { StudentLayoutComponent } from './student-layout/student-layout.component';
import { InicioComponent } from './inicio/inicio.component';
import { TestComponent } from './test/test.component';
import { UniversitiesComponent } from './universities/universities.component';
import { CommunityComponent } from './community/community.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ResultadosGuardadosComponent } from './test/resultados-guardados/resultados-guardados.component';
import { ForoComponent } from './foro/foro.component';


export const studentRoutes: Routes = [
    {
        path: '',
        children: [
            {path: 'inicio', component:InicioComponent},
            {path: 'test', component:TestComponent},
            {path: 'universities', component:UniversitiesComponent},
            {path: 'community', component:CommunityComponent},
            {path: 'appointment', component:AppointmentComponent},
            {path: 'resultados-guardados', component:ResultadosGuardadosComponent},
            {path: 'foro', component:ForoComponent},
            {path: 'Sesion', component: AppointmentComponent}
        ]
    },

];

// para rutas protegidas agregar canActivate: [AuthGuard]
