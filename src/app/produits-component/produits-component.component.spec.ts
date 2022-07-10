import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsComponentComponent } from './produits-component.component';

describe('ProduitsComponentComponent', () => {
  let component: ProduitsComponentComponent;
  let fixture: ComponentFixture<ProduitsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
