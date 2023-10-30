import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-fotografia',
  templateUrl: './fotografia.component.html',
  styleUrls: ['./fotografia.component.css']
})
export class FotografiaComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo({top: 0});
  }

  menuMovil = false;
}
