import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonAvatar, IonItem } from "@ionic/angular/standalone";
import { NuevoHiloComponent } from "../nuevo-hilo/nuevo-hilo.component";

@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.scss'],
  imports: [IonicModule, NuevoHiloComponent]	
})
export class UsuarioPerfilComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
