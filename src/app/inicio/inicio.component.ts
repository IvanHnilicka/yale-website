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
        //this.imagenes[i].src = url;
      }).catch((error) => {
        console.log(error);
      })
    } 
  }

  ngAfterViewInit(): void {
    // Obtiene las imagenes para modificarlas en el slider
    document.querySelectorAll('.swiper-img').forEach(imagen => {
      this.carrusel.push(imagen as HTMLImageElement);
    });
  }

  menuMovil = false;

  cerrarMenuMovil() {
    setTimeout(() => {
      this.menuMovil = false;
    }, 100);
  }


  // Arreglo que guarda el link de las imagenes
  carrusel: HTMLImageElement[] = [];
  
  imagenes = [
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/yale-school-of-art.appspot.com/o/noticias%2Fnoticia_1.jpg?alt=media&token=c2e08142-77e5-426d-a457-b291740a7d49',
      description: 'Visita la galería de Arte ubicada dentro de la Universidad'
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/yale-school-of-art.appspot.com/o/noticias%2Fnoticia_2.jpg?alt=media&token=b2bcf7a9-e77c-460e-b57f-cc082a027e4a',
      description: 'Te invitamos a la conferencia de Arte Moderno con Alejandro Vargas'
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/yale-school-of-art.appspot.com/o/noticias%2Fnoticia_3.jpg?alt=media&token=f0f9d8a1-2249-4ded-a5d5-2fd968bb6608',
      description: 'Publica tus obras en el foro oficial para compartir tu arte'
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/yale-school-of-art.appspot.com/o/noticias%2Fnoticia_4.jpg?alt=media&token=91151a39-10ea-4be0-93e0-6e4d774461f6',
      description: 'Universidad se prepara para cierre de ciclo escolar'
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/yale-school-of-art.appspot.com/o/noticias%2Fnoticia_5.jpg?alt=media&token=21741bce-1f0f-4655-b5ff-629b911e4f1a',
      description: 'Invita a tus amigos y familiares al curso de pintura para principiantes'
    },
  ]

  // Funciones para cambiar las imagenes hacia adelante y hacia atras respectivamente
  slideForward(): void {
    let src = this.imagenes.map((img) => {
      return img.src;
    })

    let index = src.indexOf((this.carrusel[0].children.item(0) as HTMLImageElement).src);

    for(let i = 0; i < this.carrusel.length; i++){
      (this.carrusel[i].children.item(0) as HTMLImageElement).src = this.imagenes[(i + index + 1) % this.imagenes.length].src;
      (this.carrusel[i].children.item(1) as HTMLHeadElement).textContent = this.imagenes[(i + index + 1) % this.imagenes.length].description;
    }
  }  

  slideBack(): void {
    let src = this.imagenes.map((img) => {
      return img.src;
    })

    let index = src.indexOf((this.carrusel[0].children.item(0) as HTMLImageElement).src);

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


  // Funcion que cambia las imagenes cada 6 segundos
  slider = setInterval(() => {
    this.slideForward();
  }, 6000);

  // Reinicia el delay si se cambian las noticias manualmente
  resetTimer(): void {
    clearInterval(this.slider);
    this.carrusel[0].classList.remove('animate-fade');
    this.carrusel[1].classList.remove('animate-fade');
    this.carrusel[2].classList.remove('animate-fade');

    setTimeout(() => {
      this.slider = setInterval(() => {
        this.slideForward();
        this.carrusel[0].classList.add('animate-fade');
        this.carrusel[1].classList.add('animate-fade');
        this.carrusel[2].classList.add('animate-fade');
      }, 6000);
    });
  }
}
