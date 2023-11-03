import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
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
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'diseño-grafico', component: DisenoGraficoComponent },
  { path: 'pintura', component: PinturaComponent },
  { path: 'fotografia', component: FotografiaComponent },
  { path: 'escultura', component: EsculturaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'foro', component: ForoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '404', component: NotFoundComponent},
  { path: 'header', component: HeaderComponent},
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
