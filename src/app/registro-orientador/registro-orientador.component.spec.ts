import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroOrientadorComponent } from './registro-orientador.component';

describe('RegistroOrientadorComponent', () => {
  let component: RegistroOrientadorComponent;
  let fixture: ComponentFixture<RegistroOrientadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroOrientadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroOrientadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
