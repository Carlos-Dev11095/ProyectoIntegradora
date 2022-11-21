import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NivelesPage } from './niveles.page';

const routes: Routes = [
  {
    path: '',
    component: NivelesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NivelesPageRoutingModule {}
