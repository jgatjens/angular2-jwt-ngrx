import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProfileComponent } from './form-password.component';

describe('FormProfileComponent', () => {
  let component: FormProfileComponent;
  let fixture: ComponentFixture<FormProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
