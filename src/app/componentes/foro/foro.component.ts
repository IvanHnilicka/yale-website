import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Publicacion } from 'src/app/modelos/publicacion';
import { AuthService } from 'src/app/servicios/auth/auth.service';
import { DatabaseService } from 'src/app/servicios/database/database.service';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {
  constructor(private db: DatabaseService, private authService: AuthService, private router: Router, private toaster: ToastrService){ }
  
  user: any;

  ngOnInit(): void {
    window.scrollTo({ top: 0 });
    this.cargarPublicaciones();
    this.user = JSON.parse(localStorage.getItem('loggedUser') || 'null');
  }
  
  menuMovil = false;
  publicaciones: Publicacion[] = [];


  cargarPublicaciones(){
    this.db.getPosts().subscribe(res => {
      this.publicaciones = Object.values(res);
      this.publicaciones.sort((a: Publicacion, b: Publicacion) => {
        return b.hora - a.hora;
      })
    });
  }


  logout(){
    this.authService.logout();
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/login');
  }


  likePost(id: string, index: number){
    const user = this.authService.getCurrentUser();
    if(user){
      let post = this.publicaciones[index];
      if(post.likes){
        post.likes.push(user.uid);
        this.db.actualizarPost(id, post);
      }else{
        post.likes = [ user.uid ];
        this.db.actualizarPost(id, post);
      }
    }else{
      this.router.navigateByUrl('/login');
    }
  }  
  
  unlikePost(id: string, index: number){
    const user = this.authService.getCurrentUser();
    if(user){
        let indiceUser = this.publicaciones[index].likes.indexOf(user.uid);
        this.publicaciones[index].likes.splice(indiceUser, 1);
        this.db.actualizarPost(id, this.publicaciones[index]);
    }else{
      this.router.navigateByUrl('/login');
    }
  }

  getLikes(index: number){
    if(this.publicaciones[index].likes){
      return this.publicaciones[index].likes.length;
    }
    return 0;
  }
}
