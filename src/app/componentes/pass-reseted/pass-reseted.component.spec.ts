import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassResetedComponent } from './pass-reseted.component';

describe('PassResetedComponent', () => {
  let component: PassResetedComponent;
  let fixture: ComponentFixture<PassResetedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassResetedComponent]
    });
    fixture = TestBed.createComponent(PassResetedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
