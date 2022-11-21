import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnemigosPageRoutingModule } from './enemigos-routing.module';

import { EnemigosPage } from './enemigos.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnemigosPageRoutingModule,
    ComponentesModule
  ],
  declarations: [EnemigosPage]
})
export class EnemigosPageModule {}
