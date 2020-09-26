import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantInfoTravellingComponent } from './restaurant-info-travelling.component';

describe('RestaurantInfoTravellingComponent', () => {
  let component: RestaurantInfoTravellingComponent;
  let fixture: ComponentFixture<RestaurantInfoTravellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantInfoTravellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantInfoTravellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
