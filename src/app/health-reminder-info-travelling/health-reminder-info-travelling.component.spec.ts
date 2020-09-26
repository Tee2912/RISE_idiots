import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthReminderInfoTravellingComponent } from './health-reminder-info-travelling.component';

describe('HealthReminderInfoTravellingComponent', () => {
  let component: HealthReminderInfoTravellingComponent;
  let fixture: ComponentFixture<HealthReminderInfoTravellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthReminderInfoTravellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthReminderInfoTravellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
