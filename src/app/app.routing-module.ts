import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    {path: '', redirectTo: '/employeeslist', pathMatch: 'full'},
    {path: 'employeeslist', component: EmployeeListComponent},
    {path: 'employeedetail', component: EmployeeDetailComponent},
    {path: "**", component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [EmployeeListComponent, EmployeeDetailComponent, PageNotFoundComponent];