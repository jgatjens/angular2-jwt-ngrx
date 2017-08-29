import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardApplicantComponent } from './card-applicant.component';

describe('CardApplicantComponent', () => {
  let component: CardApplicantComponent;
  let fixture: ComponentFixture<CardApplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardApplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
