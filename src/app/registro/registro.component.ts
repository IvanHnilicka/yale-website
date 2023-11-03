import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo({ top: 0 });
  }

  menuMovil = false;
}
