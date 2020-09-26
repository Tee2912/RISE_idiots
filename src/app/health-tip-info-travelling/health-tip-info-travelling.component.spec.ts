import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthTipInfoTravellingComponent } from './health-tip-info-travelling.component';

describe('HealthTipInfoTravellingComponent', () => {
  let component: HealthTipInfoTravellingComponent;
  let fixture: ComponentFixture<HealthTipInfoTravellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthTipInfoTravellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthTipInfoTravellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
