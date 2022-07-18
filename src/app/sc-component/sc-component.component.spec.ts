import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScComponentComponent } from './sc-component.component';

describe('ScComponentComponent', () => {
  let component: ScComponentComponent;
  let fixture: ComponentFixture<ScComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
