import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoAppComponent } from './logo-app.component';

describe('LogoAppComponent', () => {
  let component: LogoAppComponent;
  let fixture: ComponentFixture<LogoAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
