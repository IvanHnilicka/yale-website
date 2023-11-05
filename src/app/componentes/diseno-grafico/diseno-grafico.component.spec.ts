import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenoGraficoComponent } from './diseno-grafico.component';

describe('DisenoGraficoComponent', () => {
  let component: DisenoGraficoComponent;
  let fixture: ComponentFixture<DisenoGraficoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisenoGraficoComponent]
    });
    fixture = TestBed.createComponent(DisenoGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
