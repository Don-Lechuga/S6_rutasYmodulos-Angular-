import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from 'modulos/usuarios/contactos/contactos.component';
import { ContentComponent } from 'modulos/usuarios/content/content.component';
import { NavbarComponent } from 'modulos/usuarios/navbar/navbar.component';
import { NosotrosComponent } from 'modulos/usuarios/nosotros/nosotros.component';
import { ServiciosComponent } from 'modulos/usuarios/servicios/servicios.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component: ContentComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'contactos', component: ContactosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
