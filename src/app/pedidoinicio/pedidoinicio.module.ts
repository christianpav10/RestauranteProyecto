import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidoinicioPageRoutingModule } from './pedidoinicio-routing.module';

import { PedidoinicioPage } from './pedidoinicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidoinicioPageRoutingModule
  ],
  declarations: [PedidoinicioPage]
})
export class PedidoinicioPageModule {}
