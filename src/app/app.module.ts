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

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent
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
