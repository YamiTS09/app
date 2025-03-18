import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HiloPageRoutingModule } from './hilo-routing.module';

import { HiloPage } from './hilo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HiloPageRoutingModule
  ],
  declarations: [HiloPage]
})
export class HiloPageModule {}
