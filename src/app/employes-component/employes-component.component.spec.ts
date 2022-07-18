import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployesComponentComponent } from './employes-component.component';

describe('EmployesComponentComponent', () => {
  let component: EmployesComponentComponent;
  let fixture: ComponentFixture<EmployesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
