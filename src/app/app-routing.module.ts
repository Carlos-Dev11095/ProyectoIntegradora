import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
//Eliminar home porque agregamos nuestro propioa inicio
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./pages/nosotros/nosotros.module').then( m => m.NosotrosPageModule)
  },
  {
    path: 'actualizaciones',
    loadChildren: () => import('./pages/actualizaciones/actualizaciones.module').then( m => m.ActualizacionesPageModule)
  },
  {
    path: 'principales',
    loadChildren: () => import('./pages/principales/principales.module').then( m => m.PrincipalesPageModule)
  },
  {
    path: 'jefes',
    loadChildren: () => import('./pages/jefes/jefes.module').then( m => m.JefesPageModule)
  },
  {
    path: 'logros',
    loadChildren: () => import('./pages/logros/logros.module').then( m => m.LogrosPageModule)
  },
  {
    path: 'enemigos',
    loadChildren: () => import('./pages/enemigos/enemigos.module').then( m => m.EnemigosPageModule)
  },
  {
    path: 'objetos',
    loadChildren: () => import('./pages/objetos/objetos.module').then( m => m.ObjetosPageModule)
  },
  {
    path: 'niveles',
    loadChildren: () => import('./pages/niveles/niveles.module').then( m => m.NivelesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
