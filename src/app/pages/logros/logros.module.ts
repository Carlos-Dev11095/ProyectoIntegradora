import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogrosPageRoutingModule } from './logros-routing.module';

import { LogrosPage } from './logros.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogrosPageRoutingModule,
    ComponentesModule
  ],
  declarations: [LogrosPage]
})
export class LogrosPageModule {}
