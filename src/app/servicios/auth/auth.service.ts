import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, updateProfile, sendEmailVerification } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private auth: Auth, private angularAuth: AngularFireAuth) { }
    
  register(email: string, password: string){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  verificarCorreo(){
    let user = this.auth.currentUser;
    if(user){
      return sendEmailVerification(user);
    }
    return;
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

  getCurrentUser(){
    const user = this.auth.currentUser;
    console.log(user);
    return user;
  }
}
