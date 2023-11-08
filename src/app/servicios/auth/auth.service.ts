import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, updateProfile, sendPasswordResetEmail, confirmPasswordReset } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private auth: Auth, private toaster: ToastrService, private router: Router) { }
    
  register(email: string, password: string){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login(email: string, password: string){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider().setCustomParameters({prompt: 'select_account'}));
  }

  logout(){
    return signOut(this.auth);
  }

  setNombre(nombre: string){
    let user = this.auth.currentUser;
    if(user){
      return updateProfile(user, {
        displayName: nombre,
      })
      .then(response => console.log(response))
      .catch(error => console.log(error));
    }
    
    return;
  }

  passwordResetEmail(correo: string){
    const auth = getAuth();
    sendPasswordResetEmail(auth, correo)
    .then(() => {
      this.toaster.success('Revisa tu bandeja de correo no deseado para restablecer la contraseña', 'Correo enviado', { timeOut: 5000 });
      this.router.navigateByUrl('/login');
    })
    .catch(error => {
      this.toaster.error('Ha ocurrido un error', 'ERROR')
      console.log(error);
    });
  }

  resetPassword(code: string, newPass: string){
    const auth = getAuth();
    return confirmPasswordReset(auth, code, newPass);
  }


  getCurrentUser(){
    const user = this.auth.currentUser;
    return user;
  }
}
