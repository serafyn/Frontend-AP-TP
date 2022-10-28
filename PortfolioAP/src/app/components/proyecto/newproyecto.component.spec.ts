import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewproyectoComponent } from './newproyecto.component';

describe('NewproyectoComponent', () => {
  let component: NewproyectoComponent;
  let fixture: ComponentFixture<NewproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewproyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
