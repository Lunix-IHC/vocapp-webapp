import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoTestComponent } from './acceso-test.component';

describe('AccesoTestComponent', () => {
  let component: AccesoTestComponent;
  let fixture: ComponentFixture<AccesoTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccesoTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesoTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
