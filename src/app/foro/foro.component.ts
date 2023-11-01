import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo({ top: 0 });
  }

  menuMovil = false;
}
