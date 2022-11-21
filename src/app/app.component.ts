import { Component } from '@angular/core';
interface elementosMenu{
  icono: string;
  nombre: string;
  ruta: string;
  color: string;
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  elementos: elementosMenu[]=[

    {
      icono:'sparkles-sharp',
      nombre:'Personajes',
      ruta:'/principales',
      color:'principales'
    },
    {
      icono:'nuclear-sharp',
      nombre:'Jefes',
      ruta:'/jefes',
      color:'jefes'
    },
    {
      icono:'skull-sharp',
      nombre:'Enemigos',
      ruta:'/enemigos',
      color:'enemigos  '
    },
    {
      icono:'analytics-sharp',
      nombre:'Niveles',
      ruta:'/niveles',
      color:'niveles'
    },
    {
      icono:'shapes-sharp',
      nombre:'Objetos',
      ruta:'/objetos',
      color:'objetos'
    },
    {
      icono:'star-half-sharp',
      nombre:'Logros',
      ruta:'/logros',
      color:'logros'
    },
    {
      icono:'newspaper-sharp',
      nombre:'Actualizaciones',
      ruta:'/actualizaciones',
      color:'header'
    }
    ,
    {
      icono:'people-sharp',
      nombre:'Nosotros',
      ruta:'/nosotros',
      color:'nosotros'
    }
    
  ];
  constructor() {}
}
