import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EmployeeService } from './employee.service';
import { AppRoutingModule, routingComponents } from './app.routing-module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParticularEmployeeDetailComponent } from './particular-employee-detail/particular-employee-detail.component';
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    routingComponents,
    PageNotFoundComponent,
    ParticularEmployeeDetailComponent,
    EmployeeOverviewComponent,
    EmployeeContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
