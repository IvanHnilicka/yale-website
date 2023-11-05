import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { environment } from 'src/environments/environment.prod';
import { Publicacion } from 'src/app/modelos/publicacion';

// Initialize Firebase
const app = initializeApp(environment.firebase);

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  getUsuarios(): any {
    return this.http.get('https://yale-school-of-art-default-rtdb.firebaseio.com/Usuarios.json');
  }

  getStorageRef() {
    const storage = getStorage(app);    
    return storage;
  }

  publicarForo(publicacion: Publicacion) {
    return this.http.post('https://yale-school-of-art-default-rtdb.firebaseio.com/foro.json', publicacion);
  }

  getPosts(){
    return this.http.get('https://yale-school-of-art-default-rtdb.firebaseio.com/foro.json');
  }
}
