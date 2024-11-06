import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosGuardadosComponent } from './resultados-guardados.component';

describe('ResultadosGuardadosComponent', () => {
  let component: ResultadosGuardadosComponent;
  let fixture: ComponentFixture<ResultadosGuardadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultadosGuardadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosGuardadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
