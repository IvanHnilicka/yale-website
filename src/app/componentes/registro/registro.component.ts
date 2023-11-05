import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/servicios/auth/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router, private toaster: ToastrService) {}

  ngOnInit(): void {
    window.scrollTo({ top: 0 });
  }

  menuMovil = false;
  mostrarPassword = false;
  mostrarConfirmacion = false;

  registerForm: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })


  onSubmit(){
    // Validaciones para input de correo
    if(this.registerForm.controls['correo'].hasError('email') || this.registerForm.value.correo.length === 0){
      this.toaster.error("Ingrese un correo válido", 'ERROR');
      return;
    }

    // Validaciones para input de contraseña
    if(this.registerForm.value.password = '' || this.registerForm.value.password.length < 8){
      this.toaster.error("Ingrese una contraseña valida", "ERROR");
      return;
    }

    let userName = this.registerForm.controls['userName'].value;
    let correo = this.registerForm.controls['correo'].value;
    let contraseña = this.registerForm.controls['password'].value;

    this.authService.register(correo, contraseña)
    .then(response => {
      console.log(response);
      this.authService.login(correo, contraseña);
      this.authService.setNombre(userName);
      this.router.navigateByUrl('/foro');
    })
    .catch(error => console.log(error));
  }
}
