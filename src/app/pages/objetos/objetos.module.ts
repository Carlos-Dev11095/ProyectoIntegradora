import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjetosPageRoutingModule } from './objetos-routing.module';

import { ObjetosPage } from './objetos.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjetosPageRoutingModule,
    ComponentesModule
  ],
  declarations: [ObjetosPage]
})
export class ObjetosPageModule {}
