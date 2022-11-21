import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JefesPageRoutingModule } from './jefes-routing.module';

import { JefesPage } from './jefes.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JefesPageRoutingModule,
    ComponentesModule
  ],
  declarations: [JefesPage]
})
export class JefesPageModule {}
