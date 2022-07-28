import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormgiocatoriComponent } from './formgiocatori.component';

describe('FormgiocatoriComponent', () => {
  let component: FormgiocatoriComponent;
  let fixture: ComponentFixture<FormgiocatoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormgiocatoriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormgiocatoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
