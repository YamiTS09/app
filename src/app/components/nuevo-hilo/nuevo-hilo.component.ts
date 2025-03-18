import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-nuevo-hilo',
  templateUrl: './nuevo-hilo.component.html',
  styleUrls: ['./nuevo-hilo.component.scss'],
  imports: [IonicModule]
})
export class NuevoHiloComponent  implements OnInit {

  constructor(private router: Router) {}

  irAPublicarHilo() {
    this.router.navigate(['/publicar-hilo']); 
  }

  ngOnInit() {}

}
