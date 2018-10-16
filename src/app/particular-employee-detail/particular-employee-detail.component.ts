import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'particular-employee-detail',
  templateUrl: './particular-employee-detail.component.html',
  styleUrls: ['./particular-employee-detail.component.css']
})
export class ParticularEmployeeDetailComponent implements OnInit {

  public employees = [];
  public errorMsg;
  public employeeId;

  constructor(private _employeeService : EmployeeService, private route : ActivatedRoute) { }

  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data,
               error => this.errorMsg = error);

    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.employeeId = id;
  }

}
