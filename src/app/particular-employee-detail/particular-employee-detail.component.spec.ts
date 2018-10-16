import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularEmployeeDetailComponent } from './particular-employee-detail.component';

describe('ParticularEmployeeDetailComponent', () => {
  let component: ParticularEmployeeDetailComponent;
  let fixture: ComponentFixture<ParticularEmployeeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticularEmployeeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticularEmployeeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
