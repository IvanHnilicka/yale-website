import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
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

import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

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
  { path: 'publicar', component: PublicarComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
