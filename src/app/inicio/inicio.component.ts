import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})


export class InicioComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void { 
    this.menuMovil = false;
  }

  ngAfterViewInit(): void {
    // Obtiene las imagenes para modificarlas en el slider
    document.querySelectorAll('.swiper-img').forEach(imagen => {
      this.carrusel.push(imagen as HTMLImageElement);
    });
  }

  menuMovil = false;

  // Arreglo que guarda el link de las imagenes
  // TODO: guardar imagenes en servidor y descargarlas desde dicho servidor
  imagenes: string[] = ['http://localhost:4200/assets/noticia.jpg', 'http://localhost:4200/assets/noticia_2.jpg', 'http://localhost:4200/assets/noticia_3.jpg', 'http://localhost:4200/assets/noticia_4.jpg', 'http://localhost:4200/assets/noticia_5.jpg'];

  carrusel: HTMLImageElement[] = [];


  // Funciones para cambiar las imagenes hacia adelante y hacia atras respectivamente
  slideForward(): void {
    let index = this.imagenes.indexOf(this.carrusel[0].src);

    for(let i = 0; i < this.carrusel.length; i++){
      this.carrusel[i].src = this.imagenes[(i + index + 1) % this.imagenes.length];
    }
  }
  

  slideBack(): void {
    let index = this.imagenes.indexOf(this.carrusel[0].src);

    for(let i = 0; i < this.carrusel.length; i++){
      if(index + (i - 1) < 0 ) {
        this.carrusel[i].src = this.imagenes[this.imagenes.length + (index + (i - 1))];
        continue;
      }

      this.carrusel[i].src = this.imagenes[(index + (i - 1)) % this.imagenes.length];
    }
  }  


  // Funcion que cambia las imagenes cada 5 segundos
  slider = setInterval(() => {
    this.slideForward();
  }, 5000);


  // Reinicia el delay si se cambian las noticias manualmente
  resetTimer(): void {
    clearInterval(this.slider);
    setTimeout(() => {
      this.slider = setInterval(() => {
        this.slideForward();
      }, 5000);
    });
  }
}
