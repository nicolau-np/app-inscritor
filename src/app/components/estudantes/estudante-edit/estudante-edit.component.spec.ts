import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudanteEditComponent } from './estudante-edit.component';

describe('EstudanteEditComponent', () => {
  let component: EstudanteEditComponent;
  let fixture: ComponentFixture<EstudanteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudanteEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudanteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
