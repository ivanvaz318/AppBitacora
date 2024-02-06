import { Routes } from '@angular/router';
import { AuthGuard } from '../config/auth.guard';
import LoginComponent from './login/login.component';
import DashboardComponent from './dashboard/dashboard.component';


export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./dashboard/dashboard.component'),
        canActivate: [AuthGuard],
        children: [
            {
                path: 'dashboard', component: DashboardComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },

  
];
