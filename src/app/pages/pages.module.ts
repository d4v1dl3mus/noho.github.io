import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductosComponent } from './productos/productos.component';



@NgModule({
  declarations: [
    ProductosComponent,
    ContactoComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
