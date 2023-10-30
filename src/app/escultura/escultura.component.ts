import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escultura',
  templateUrl: './escultura.component.html',
  styleUrls: ['./escultura.component.css']
})
export class EsculturaComponent implements OnInit {
  
  ngOnInit(): void {
    window.scrollTo({top: 0});
  }
  
  menuMovil = false;
}
