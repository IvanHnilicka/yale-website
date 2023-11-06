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
    this.user = JSON.parse(localStorage.getItem('loggedUser') || '{}').displayName;

    this.authService.getCurrentUser();
  }
  
  menuMovil = false;
  publicaciones: Publicacion[] = [];

  cargarPublicaciones(){
    this.db.getPosts().subscribe(res => {
      if(res){
        this.publicaciones = Object.values(res);
        this.publicaciones.sort((a, b) => {
          return b.hora - a.hora;
        })
      }
    });
  }

  logout(){
    this.authService.logout();
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/login');
  }
}
