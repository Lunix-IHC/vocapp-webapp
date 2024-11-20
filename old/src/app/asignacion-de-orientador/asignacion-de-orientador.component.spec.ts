import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionDeOrientadorComponent } from './asignacion-de-orientador.component';

describe('AsignacionDeOrientadorComponent', () => {
  let component: AsignacionDeOrientadorComponent;
  let fixture: ComponentFixture<AsignacionDeOrientadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignacionDeOrientadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignacionDeOrientadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
