import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseaseCaseInformationComponent } from './disease-case-information.component';

describe('DiseaseCaseInformationComponent', () => {
  let component: DiseaseCaseInformationComponent;
  let fixture: ComponentFixture<DiseaseCaseInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiseaseCaseInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseaseCaseInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
