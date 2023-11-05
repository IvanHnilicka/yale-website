import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  }
  
  menuMovil = false;
  publicaciones: any[] = [];

  cargarPublicaciones(){
    // Mapea las publicaciones al arreglo de publicaciones
    this.db.getPosts().subscribe((res: any) => {
      if(res){
        this.publicaciones = Object.values(res);
        this.publicaciones.reverse();
      }
    });
  }

  logout(){
    this.authService.logout();
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/login');
  }

  getUser(){
    let user = JSON.parse(localStorage.getItem('loggedUser') || '{}');
    console.log(user);
    console.log('Nombre: ', this.user);
  }

  verificarCorreo(){
    this.authService.verificarCorreo();
    this.toaster.success('Se ha enviado un mensaje de verificacion a tu correo', 'Verificacion pendiente');
  }
}
