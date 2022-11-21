import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalesPage } from './principales.page';

const routes: Routes = [
  {
    path: '',
    component: PrincipalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalesPageRoutingModule {}
