import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAHrcJKraxi620S0_msy5C3Gs82_yK1w4Y",
  authDomain: "yale-school-of-art.firebaseapp.com",
  databaseURL: "https://yale-school-of-art-default-rtdb.firebaseio.com",
  projectId: "yale-school-of-art",
  storageBucket: "yale-school-of-art.appspot.com",
  messagingSenderId: "279794380397",
  appId: "1:279794380397:web:2e35e3bd1dbb0a8b0d1964",
  measurementId: "G-F2R9RSWQ8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  getUsuarios(): any {
    return this.http.get('https://yale-school-of-art-default-rtdb.firebaseio.com/Usuarios.json');
  }

  getStorageRef() {
    const storage = getStorage(app);    
    return storage;
  }
}
