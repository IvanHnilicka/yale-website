import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/servicios/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router, private toaster: ToastrService){ }

  ngOnInit(): void {
    window.scrollTo({ top: 0 });
    let usuario = JSON.parse(localStorage.getItem('loggedUser') || '{}');
    if(usuario.displayName){
      this.router.navigateByUrl('/foro');
    }
  }

  loginForm: FormGroup = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  menuMovil = false;
  mostrarPassword = false;

  onSubmit(){
    // Validaciones para input de correo
    if(this.loginForm.controls['correo'].hasError('email') || this.loginForm.value.correo.length === 0){
      this.toaster.error("Ingrese un correo válido", 'ERROR');
      return;
    }

    // Validaciones para input de contraseña
    if(this.loginForm.value.password = '' || this.loginForm.value.password.length < 8){
      this.toaster.error("Ingrese una contraseña valida", "ERROR");
      return;
    }

    this.authService.login(this.loginForm.controls['correo'].value, this.loginForm.controls['password'].value)
    .then(response => {
      localStorage.setItem('loggedUser', JSON.stringify(response.user));
      this.router.navigateByUrl('/foro');
    })
    .catch(error => {
      this.toaster.error("Verifique sus credenciales", 'ERROR');
      this.loginForm.controls['password'].setValue('');
      console.log(error);
    });
  }


  loginGoogle(){
    this.authService.loginGoogle()
    .then(response => {
      localStorage.setItem('loggedUser', JSON.stringify(response.user));
      this.router.navigateByUrl('/foro');
    })
    .catch(error => {
      console.log(error);
      this.toaster.error('Ha ocurrido un error', 'Error');
    });
  }
  
  
  logOut(){
    this.authService.logout()
    .then(() => {
      this.router.navigateByUrl('/foro');
    })
    .catch(error => console.log(error));
  }
}