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

    console.log(this.carrusel);    
  }

  menuMovil = false;

  // Arreglo que guarda el link de las imagenes
  // TODO: guardar imagenes en servidor y descargarlas desde dicho servidor
  imagenes2: string[] = ['http://localhost:4200/assets/noticia.jpg', 'http://localhost:4200/assets/noticia_2.jpg', 'http://localhost:4200/assets/noticia_3.jpg', 'http://localhost:4200/assets/noticia_4.jpg', 'http://localhost:4200/assets/noticia_5.jpg'];

  carrusel: HTMLImageElement[] = [];
  imagenes = [
    {
      src: 'http://localhost:4200/assets/noticia.jpg',
      description: 'Visita la galería de Arte ubicada dentro de la Universidad'
    },
    {
      src: 'http://localhost:4200/assets/noticia_2.jpg',
      description: 'Te invitamos a la conferencia de Arte Moderno con Alejandro Vargas'
    },
    {
      src: 'http://localhost:4200/assets/noticia_3.jpg',
      description: 'Publica tus obras en el foro oficial para compartir tu arte'
    },
    {
      src: 'http://localhost:4200/assets/noticia_4.jpg',
      description: 'Universidad se prepara para cierre de ciclo escolar'
    },
    {
      src: 'http://localhost:4200/assets/noticia_5.jpg',
      description: 'Invita a tus amigos y familiares al curso de pintura para principiantes'
    },
  ]


  // Funciones para cambiar las imagenes hacia adelante y hacia atras respectivamente
  slideForward(): void {
    let index = 0;
    for(let i = 0; i < this.imagenes.length; i++){
      if(this.imagenes[i].src === (this.carrusel[0].children.item(0) as HTMLImageElement).src){
        index = i;
        break;
      }
    }

    for(let i = 0; i < this.carrusel.length; i++){
      (this.carrusel[i].children.item(0) as HTMLImageElement).src = this.imagenes[(i + index + 1) % this.imagenes.length].src;
      (this.carrusel[i].children.item(1) as HTMLHeadElement).textContent = this.imagenes[(i + index + 1) % this.imagenes.length].description;
    }
  }
  

  slideBack(): void {
    let index = 0;
    for(let i = 0; i < this.imagenes.length; i++){
      if(this.imagenes[i].src === (this.carrusel[0].children.item(0) as HTMLImageElement).src){
        index = i;
        break;
      }
    }

    for(let i = 0; i < this.carrusel.length; i++){
      if(index + (i - 1) < 0 ) {
        (this.carrusel[i].children.item(0) as HTMLImageElement).src = this.imagenes[this.imagenes.length + (index + (i - 1))].src;
        (this.carrusel[i].children.item(1) as HTMLHeadElement).textContent = this.imagenes[this.imagenes.length + (index + (i - 1))].description;
        continue;
      }

      (this.carrusel[i].children.item(0) as HTMLImageElement).src = this.imagenes[(index + (i - 1)) % this.imagenes.length].src;
      (this.carrusel[i].children.item(1) as HTMLHeadElement).textContent = this.imagenes[(index + (i - 1)) % this.imagenes.length].description;
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
