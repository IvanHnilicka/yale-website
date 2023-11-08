import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/servicios/auth/auth.service';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent {

  constructor(private authService: AuthService, private toaster: ToastrService, private router: Router){ }

  emailForm: FormGroup = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email]),
  })

  menuMovil = false;

  onSubmit(){
    let correo = this.emailForm.controls['correo'].value;
    this.authService.passwordResetEmail(correo);
  }
}
