import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidoinicioPage } from './pedidoinicio.page';

const routes: Routes = [
  {
    path: '',
    component: PedidoinicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoinicioPageRoutingModule {}
