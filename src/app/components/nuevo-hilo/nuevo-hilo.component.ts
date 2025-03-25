import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-nuevo-hilo',
  templateUrl: './nuevo-hilo.component.html',
  styleUrls: ['./nuevo-hilo.component.scss'],
  imports: [IonicModule]
})
export class NuevoHiloComponent implements OnInit {
  image: string = ''; 

  constructor(private router: Router) {}

  irAPublicarHilo() {
    this.router.navigate(['/hilo/publicar-hilo']);
  }

  async abrirGaleria() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri, 
        source: CameraSource.Photos  
      });

      this.image = image.webPath || ''; 
    } catch (error) {
      console.error('Error al seleccionar la foto:', error);
    }
  }

  ngOnInit() {}
}
