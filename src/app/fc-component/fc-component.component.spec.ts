import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcComponentComponent } from './fc-component.component';

describe('FcComponentComponent', () => {
  let component: FcComponentComponent;
  let fixture: ComponentFixture<FcComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FcComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FcComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
