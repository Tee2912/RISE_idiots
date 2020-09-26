import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyInfoTravellingComponent } from './pharmacy-info-travelling.component';

describe('PharmacyInfoTravellingComponent', () => {
  let component: PharmacyInfoTravellingComponent;
  let fixture: ComponentFixture<PharmacyInfoTravellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacyInfoTravellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyInfoTravellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
