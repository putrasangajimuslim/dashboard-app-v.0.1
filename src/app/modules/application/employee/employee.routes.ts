import { Routes } from "@angular/router";
import { EmployeeListComponent } from "./pages/employee-list/employee-list.component";

export const employeeRoutes: Routes = [
    {
        path: '',
        component: EmployeeListComponent
    }
]