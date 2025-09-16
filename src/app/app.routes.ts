import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout.component';
import { DashboardComponent } from './modules/application/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {
                path: 'application',
                loadChildren: () => import('./modules/application/application.routes').then(r => r.applicationRoutes)
            },
            {
                path: '',                     // redirect default
                pathMatch: 'full',
                redirectTo: 'application'
            }
        ]
    },
];
