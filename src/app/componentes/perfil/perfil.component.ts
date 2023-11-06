import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Publicacion } from 'src/app/modelos/publicacion';
import { AuthService } from 'src/app/servicios/auth/auth.service';
import { DatabaseService } from 'src/app/servicios/database/database.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  constructor(private db: DatabaseService, private authService: AuthService, private router: Router){ }
  
  user: any;

  ngOnInit(): void {
    window.scrollTo({ top: 0 });
    this.cargarPublicaciones();
    this.user = JSON.parse(localStorage.getItem('loggedUser') || '{}').displayName;
  }
  
  modalEliminar = false;
  modalLogout = false;
  menuMovil = false;
  tituloObra: string = '';
  postId: string = '';
  publicacionesUsuario: Publicacion[] = [];

  cargarPublicaciones(){
    this.publicacionesUsuario = this.db.getPostsUsuario();
  }

  logout(){
    this.authService.logout();
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/login');
  }

  showModal(id: string, titulo: string){
    this.modalEliminar = true;
    this.postId = id;
    this.tituloObra = titulo;
  }

  hideModal(){
    this.modalEliminar = false;
    this.postId = '';
  }

  eliminarPost(){
    this.modalEliminar = false;
    if(this.postId){
      this.db.eliminarPost(this.postId);
    }

    // Recarga la pagina
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/perfil']);
    });
  }
}
