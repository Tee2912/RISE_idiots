import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeActivityAdviceInformationComponent } from './before-activity-advice-information.component';

describe('BeforeActivityAdviceInformationComponent', () => {
  let component: BeforeActivityAdviceInformationComponent;
  let fixture: ComponentFixture<BeforeActivityAdviceInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeforeActivityAdviceInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforeActivityAdviceInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
