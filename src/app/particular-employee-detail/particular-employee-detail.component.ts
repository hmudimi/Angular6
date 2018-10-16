import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'particular-employee-detail',
  templateUrl: './particular-employee-detail.component.html',
  styleUrls: ['./particular-employee-detail.component.css']
})
export class ParticularEmployeeDetailComponent implements OnInit {

  public employees = [];
  public errorMsg;
  public employeeId;

  constructor(private _employeeService : EmployeeService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data,
               error => this.errorMsg = error);

    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.employeeId = id;

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.employeeId = id;
    });
  }

  goPrevious() {
    let previousId = this.employeeId - 1;
    this.router.navigate(['/employeedetail', previousId])
  }

  goNext() {
    let nextId = this.employeeId + 1;
    this.router.navigate(['/employeedetail', nextId])
  }

  goToEmployeesList() {
    let selectedId = this.employeeId ? this.employeeId : null;
    this.router.navigate(['employeeslist',{id: selectedId}])
  }

}
