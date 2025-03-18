import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicarHiloPage } from './publicar-hilo.page';

const routes: Routes = [
  {
    path: '',
    component: PublicarHiloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicarHiloPageRoutingModule {}
