import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormJobGeneralComponent } from './form-job-general.component';

describe('FormJobGeneralComponent', () => {
  let component: FormJobGeneralComponent;
  let fixture: ComponentFixture<FormJobGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormJobGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormJobGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
