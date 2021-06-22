import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'pedidoinicio',
        loadChildren: () => import('../pedidoinicio/pedidoinicio.module').then( m => m.PedidoinicioPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/pedidoinicio',
        pathMatch: 'full'
      }

    ]
      },
    {
      path: '',
      redirectTo: '/tabs/pedidoinicio',
      pathMatch: 'full'
    }
  

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
