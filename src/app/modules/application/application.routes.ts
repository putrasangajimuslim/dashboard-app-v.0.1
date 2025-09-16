import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";

export const applicationRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'employee',
        loadChildren: () => import('./employee/employee.routes').then(r => r.employeeRoutes)
    },
]