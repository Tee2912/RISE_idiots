import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeVaccineInformationComponent } from './before-vaccine-information.component';

describe('BeforeVaccineInformationComponent', () => {
  let component: BeforeVaccineInformationComponent;
  let fixture: ComponentFixture<BeforeVaccineInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeforeVaccineInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforeVaccineInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
