import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diseno-grafico',
  templateUrl: './diseno-grafico.component.html',
  styleUrls: ['./diseno-grafico.component.css']
})
export class DisenoGraficoComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo({top: 0});
  }
}
