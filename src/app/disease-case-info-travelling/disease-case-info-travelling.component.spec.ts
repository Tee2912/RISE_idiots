import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseaseCaseInfoTravellingComponent } from './disease-case-info-travelling.component';

describe('DiseaseCaseInfoTravellingComponent', () => {
  let component: DiseaseCaseInfoTravellingComponent;
  let fixture: ComponentFixture<DiseaseCaseInfoTravellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiseaseCaseInfoTravellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseaseCaseInfoTravellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
