import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicarHiloPageRoutingModule } from './publicar-hilo-routing.module';

import { PublicarHiloPage } from './publicar-hilo.page';
import { NuevoHiloComponent } from 'src/app/components/nuevo-hilo/nuevo-hilo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicarHiloPageRoutingModule,
    NuevoHiloComponent
  ],
  declarations: [PublicarHiloPage]
})
export class PublicarHiloPageModule {}
