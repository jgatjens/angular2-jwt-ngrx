import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardJobsComponent } from './card-jobs.component';

describe('CardJobsComponent', () => {
  let component: CardJobsComponent;
  let fixture: ComponentFixture<CardJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
