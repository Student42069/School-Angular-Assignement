import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraComponentComponent } from './infra-component.component';

describe('InfraComponentComponent', () => {
  let component: InfraComponentComponent;
  let fixture: ComponentFixture<InfraComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfraComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfraComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
