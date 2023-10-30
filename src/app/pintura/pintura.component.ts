import { Component } from '@angular/core';

@Component({
  selector: 'app-pintura',
  templateUrl: './pintura.component.html',
  styleUrls: ['./pintura.component.css']
})
export class PinturaComponent {
  ngOnInit(): void {
    window.scrollTo({top: 10});
  }
  
  menuMovil = false;
}
