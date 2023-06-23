import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSelectingFormComponent } from './auto-selecting-form.component';

describe('AutoSelectingFormComponent', () => {
  let component: AutoSelectingFormComponent;
  let fixture: ComponentFixture<AutoSelectingFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoSelectingFormComponent]
    });
    fixture = TestBed.createComponent(AutoSelectingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
