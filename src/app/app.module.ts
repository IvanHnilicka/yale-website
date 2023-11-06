import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { initializeApp, provideFirebaseApp } from '@angular/fire/app'
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideAuth, getAuth } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AboutUsComponent } from './componentes/about-us/about-us.component';
import { DisenoGraficoComponent } from './componentes/diseno-grafico/diseno-grafico.component';
import { PinturaComponent } from './componentes/pintura/pintura.component';
import { FotografiaComponent } from './componentes/fotografia/fotografia.component';
import { EsculturaComponent } from './componentes/escultura/escultura.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ForoComponent } from './componentes/foro/foro.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { PublicarComponent } from './componentes/publicar/publicar.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    DisenoGraficoComponent,
    PinturaComponent,
    FotografiaComponent,
    EsculturaComponent,
    NotFoundComponent,
    ContactoComponent,
    ForoComponent,
    LoginComponent,
    RegistroComponent,
    PublicarComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      resetTimeoutOnDuplicate: false,
      timeOut: 2500,
      positionClass: 'toast-top-center',
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth()),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
