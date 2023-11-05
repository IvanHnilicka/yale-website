import { Component, OnInit } from '@angular/core';
import { Publicacion } from 'src/app/modelos/publicacion';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { DatabaseService } from 'src/app/servicios/database/database.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth/auth.service';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.css']
})
export class PublicarComponent implements OnInit {
  constructor(private storage: Storage, private db: DatabaseService, private authService: AuthService, private router: Router){ }

  ngOnInit(): void {
    window.scrollTo({ top: 0 });
    let usuario = JSON.parse(localStorage.getItem('loggedUser') || '{}');
    this.publicacion.autor = usuario.displayName;
  }

  publicacion : Publicacion = {
    id: this.crearId(),
    titulo: '',
    descripcion: '',
    url: '',
    autor: '',
    fecha: null
  }

  file: any;

  crearId() {
    let id = Math.random().toString(36).substring(2);
    return id;
  }

  uploadImage(event: any){    
    this.publicacion.url = '';
    
    let divCargando = document.getElementById('cargando');
    divCargando?.classList.remove('hidden');
    divCargando?.classList.add('flex');

    const file = event.target.files[0];

    const imgRef = ref(this.storage, `foro/${this.publicacion.id}`);
    uploadBytes(imgRef, file)
    .then(() => this.getImage())
    .catch(error => console.log(error));
  }

  getImage(){
    const imgRef = ref(this.storage, `foro/${this.publicacion.id}`);
    getDownloadURL(imgRef)
    .then(response => {
      this.publicacion.url = response;
      let divCargando = document.getElementById('cargando');
      divCargando?.classList.remove('flex');
      divCargando?.classList.add('hidden');
    })
    .catch(error => console.log(error));
  }

  publicar(){
    this.publicacion.fecha = this.obtenerFecha();

    this.db.publicarForo(this.publicacion).subscribe(res => {
      this.router.navigateByUrl('foro');
    });
  }

  obtenerFecha() {
    let fecha = new Date();
    let datosFecha = fecha.toDateString().split(' ');
    let formattedDate = `${datosFecha[2]}/${datosFecha[1]}/${datosFecha[3]}`;
    return formattedDate;
  }
}
