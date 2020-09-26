import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeHealthTipsInformationComponent } from './before-health-tips-information.component';

describe('BeforeHealthTipsInformationComponent', () => {
  let component: BeforeHealthTipsInformationComponent;
  let fixture: ComponentFixture<BeforeHealthTipsInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeforeHealthTipsInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforeHealthTipsInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
