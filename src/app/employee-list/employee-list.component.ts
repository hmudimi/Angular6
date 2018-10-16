import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees = [];
  public errorMsg;
  public selectedId;
  constructor(private _employeeService: EmployeeService, private router: Router, private route : ActivatedRoute) { }

  ngOnInit() {
   this._employeeService.getEmployees()
      .subscribe(data => this.employees = data,
                 error => this.errorMsg = error);

    this.route.paramMap.subscribe((params: ParamMap) => {
    let id = parseInt(params.get('id'));
    this.selectedId = id;
    });
  }

  onSelect(employee) {
    console.log("employee",employee);
    //absolute path
    // this.router.navigate(['/employeedetail', employee.id]);

    //relative navigation
    this.router.navigate([employee.id], {relativeTo: this.route});
  }

  isSelected(employee) {
    return employee.id === this.selectedId;
  }
}
