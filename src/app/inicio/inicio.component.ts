import { Component, OnInit, AfterViewInit } from '@angular/core';
import { getDownloadURL, ref } from 'firebase/storage';
import { DatabaseService } from '../database.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})


export class InicioComponent implements OnInit, AfterViewInit {
  constructor(private bdService: DatabaseService) {}

  ngOnInit(): void {
    this.menuMovil = false;

    let storage = this.bdService.getStorageRef()
    
    // Obtiene el link de descarga de las imagenes
    for(let i = 0; i < 5; i++){
      getDownloadURL(ref(storage, `noticias/noticia_${i + 1}.jpg`)).then(url => {
        this.imagenes[i].src = url;
      })
    } 
  }

  ngAfterViewInit(): void {
    // Obtiene las imagenes para modificarlas en el slider
    document.querySelectorAll('.swiper-img').forEach(imagen => {
      this.carrusel.push(imagen as HTMLImageElement);
    });

    this.carrusel[0].src = this.imagenes[0].src;
    this.carrusel[1].src = this.imagenes[1].src;
    this.carrusel[2].src = this.imagenes[2].src;
  }

  menuMovil = false;

  cerrarMenuMovil() {
    setTimeout(() => {
      this.menuMovil = false;
    }, 100);
  }


  // Arreglo que guarda el link de las imagenes
  carrusel: HTMLImageElement[] = [];
  
  // TODO: guardar imagenes en servidor para obtenerlas de ahi
  imagenes = [
    {
      src: '',
      description: 'Visita la galería de Arte ubicada dentro de la Universidad'
    },
    {
      src: '',
      description: 'Te invitamos a la conferencia de Arte Moderno con Alejandro Vargas'
    },
    {
      src: '',
      description: 'Publica tus obras en el foro oficial para compartir tu arte'
    },
    {
      src: '',
      description: 'Universidad se prepara para cierre de ciclo escolar'
    },
    {
      src: '',
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
