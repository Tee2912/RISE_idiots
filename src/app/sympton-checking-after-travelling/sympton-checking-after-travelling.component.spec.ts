import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptonCheckingAfterTravellingComponent } from './sympton-checking-after-travelling.component';

describe('SymptonCheckingAfterTravellingComponent', () => {
  let component: SymptonCheckingAfterTravellingComponent;
  let fixture: ComponentFixture<SymptonCheckingAfterTravellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptonCheckingAfterTravellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptonCheckingAfterTravellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
