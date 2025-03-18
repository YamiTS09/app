import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicarHiloPageRoutingModule } from './publicar-hilo-routing.module';

import { PublicarHiloPage } from './publicar-hilo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicarHiloPageRoutingModule
  ],
  declarations: [PublicarHiloPage]
})
export class PublicarHiloPageModule {}
