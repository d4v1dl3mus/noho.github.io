import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  rutas = [
    {
      name: 'Productos',
      path: '/productos'
    },
    {
      name: 'Contacto',
      path: '/contacto'
    },
  ]

}
