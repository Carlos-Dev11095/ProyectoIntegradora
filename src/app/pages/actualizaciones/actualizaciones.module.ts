import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizacionesPageRoutingModule } from './actualizaciones-routing.module';

import { ActualizacionesPage } from './actualizaciones.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizacionesPageRoutingModule,
    ComponentesModule
  ],
  declarations: [ActualizacionesPage]
})
export class ActualizacionesPageModule {}
