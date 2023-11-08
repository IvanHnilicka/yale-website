import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../servicios/auth/auth.service';

@Component({
  selector: 'app-new-pass',
  templateUrl: './new-pass.component.html',
  styleUrls: ['./new-pass.component.css']
})
export class NewPassComponent implements OnInit {
  constructor(private authService: AuthService, private toaster: ToastrService, private router: Router, private route: ActivatedRoute){ }
  
  ngOnInit(): void {
    // Obtiene el codigo de reinicio
    this.route.queryParams.pipe().subscribe(params => {
      this.code = params['oobCode'];
    })
    if(!this.code){
      this.router.navigateByUrl('/login');
    }
  }

  newPassForm: FormGroup = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    passwordConf: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  code = '';
  mostrarPassword = false;
  mostrarConfirmacion = false;
  menuMovil = false;

  onSubmit(){
    const newPassword = this.newPassForm.controls['password'].value;
    const confPassword = this.newPassForm.controls['passwordConf'].value;

    if(this.code){
      if(newPassword === confPassword){
        this.authService.resetPassword(this.code, this.newPassForm.controls['password'].value)
        .then(() => {
          this.toaster.success('La contraseña ha sido actualizada con exito', 'Contraseña actualizada');
          this.router.navigateByUrl('/pass-reseted');
        })
        .catch(error => {
          console.log(error);
          this.toaster.error('Ha ocurrido un error', 'ERROR');
        });
      }else{
        this.toaster.error('Revisa que ambas contraseñas sean iguales', 'Contraseñas no coinciden');
      }
    }
  }
}
