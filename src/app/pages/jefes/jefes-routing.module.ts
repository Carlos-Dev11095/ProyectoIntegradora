import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JefesPage } from './jefes.page';

const routes: Routes = [
  {
    path: '',
    component: JefesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JefesPageRoutingModule {}
