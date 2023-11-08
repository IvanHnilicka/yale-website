import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { initializeApp } from 'firebase/app';
import { getStorage, deleteObject } from 'firebase/storage';
import { environment } from 'src/environments/environment.prod';
import { Publicacion } from 'src/app/modelos/publicacion';
import { getDatabase, set, remove } from 'firebase/database';
import {ref as DbRef} from 'firebase/database';
import { ref as StorageRef } from '@angular/fire/storage';
import { AuthService } from '../auth/auth.service';

// Initialize Firebase
const app = initializeApp(environment.firebase);

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getStorageRef() {
    const storage = getStorage(app);    
    return storage;
  }  
  

  publicarForo(publicacion: Publicacion) {
    const db = getDatabase();
    return set(DbRef(db, 'foro/' + publicacion.id), publicacion);
  }


  getPosts(){
    return this.http.get('https://yale-school-of-art-default-rtdb.firebaseio.com/foro.json');
  }


  getPostsUsuario(){
    // Obtiene el uid del usuario loggeado
    let postsUsuario : Publicacion[] = [];
    let user = this.authService.getCurrentUser();

    if(user){
      let uid = user.uid;
  
      this.getPosts().subscribe(res => {
        if(res){
          let posts = Object.values(res);
  
          // Ordena los posts en orden descendente segun la hora en que se publicaron
          posts.sort((a: Publicacion, b: Publicacion) => {
            return b.hora - a.hora;
          })
    
          posts.forEach((post: Publicacion) => {
            if(post.uid == uid){
              postsUsuario.push(post);
            }
          })
        }
      })
  
      return postsUsuario;
    }

    return [];
  }


  eliminarPost(idPost: string){
    // Elimina la imagen del storage
    const storage = this.getStorageRef();
    const imgRef = StorageRef(storage, `/foro/${idPost}`);
    deleteObject(imgRef);

    // Elimina el post de la base de datos
    console.log(`Post ${idPost} eliminado`);
    return this.http.delete(`https://yale-school-of-art-default-rtdb.firebaseio.com/foro/${idPost}.json`).subscribe(res => {
      console.log(res);
    });
  }


  actualizarPost(postId: string, postActualizado: Publicacion){
    return this.http.put(`https://yale-school-of-art-default-rtdb.firebaseio.com/foro/${postId}.json`, postActualizado).subscribe();
  }
}
