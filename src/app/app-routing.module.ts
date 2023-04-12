import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: '*',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
