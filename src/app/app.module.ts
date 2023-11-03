import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { initializeApp, provideFirebaseApp } from '@angular/fire/app'
import { environment } from 'src/environments/environment.prod';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DisenoGraficoComponent } from './diseno-grafico/diseno-grafico.component';
import { PinturaComponent } from './pintura/pintura.component';
import { FotografiaComponent } from './fotografia/fotografia.component';
import { EsculturaComponent } from './escultura/escultura.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ForoComponent } from './foro/foro.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

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
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    ToastrModule.forRoot({
      preventDuplicates: true,
      resetTimeoutOnDuplicate: false,
      timeOut: 2500,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
