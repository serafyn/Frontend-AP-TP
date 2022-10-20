import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaModelTsComponent } from './persona.model.ts.component';

describe('PersonaModelTsComponent', () => {
  let component: PersonaModelTsComponent;
  let fixture: ComponentFixture<PersonaModelTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaModelTsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaModelTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
