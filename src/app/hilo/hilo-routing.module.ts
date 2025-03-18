import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HiloPage } from './hilo.page';

const routes: Routes = [
  {
    path: '',
    component: HiloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HiloPageRoutingModule {}
