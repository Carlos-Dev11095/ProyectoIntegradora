import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnemigosPage } from './enemigos.page';

const routes: Routes = [
  {
    path: '',
    component: EnemigosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnemigosPageRoutingModule {}
