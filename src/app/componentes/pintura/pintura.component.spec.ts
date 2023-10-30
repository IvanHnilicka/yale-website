import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinturaComponent } from './pintura.component';

describe('PinturaComponent', () => {
  let component: PinturaComponent;
  let fixture: ComponentFixture<PinturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PinturaComponent]
    });
    fixture = TestBed.createComponent(PinturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
