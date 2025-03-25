import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.page.html',
  styleUrls: ['./actividad.page.scss'],
  standalone: false
})
export class ActividadPage implements OnInit {

  solicitudAceptada: boolean | null = null;

  constructor() { }

  ngOnInit() { }

  aceptarSolicitud() {
    this.solicitudAceptada = true;
  }

  rechazarSolicitud() {
    this.solicitudAceptada = false;
  }
}
