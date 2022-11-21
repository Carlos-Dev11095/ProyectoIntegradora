import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalesPageRoutingModule } from './principales-routing.module';

import { PrincipalesPage } from './principales.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalesPageRoutingModule,
    ComponentesModule
  ],
  declarations: [PrincipalesPage]
})
export class PrincipalesPageModule {}
