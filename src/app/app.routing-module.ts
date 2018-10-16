import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParticularEmployeeDetailComponent } from './particular-employee-detail/particular-employee-detail.component';

const routes: Routes = [
    //default path
    {path: '', redirectTo: '/employeeslist', pathMatch: 'full'},

    //other paths
    {path: 'employeeslist', component: EmployeeListComponent},
    {path: 'employeedetail', component: EmployeeDetailComponent},
    {path: 'employeedetail/:id', component: ParticularEmployeeDetailComponent},
    
    //If path doesn't exist
    {path: "**", component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [EmployeeListComponent, EmployeeDetailComponent,ParticularEmployeeDetailComponent, PageNotFoundComponent];