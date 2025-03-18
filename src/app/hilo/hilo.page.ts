import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hilo',
  templateUrl: './hilo.page.html',
  styleUrls: ['./hilo.page.scss'],
  standalone: false
})
export class HiloPage implements OnInit {

  constructor(private router: Router) {}

  ionViewWillEnter() {
    this.router.navigate(['/hilo/publicar-hilo']);
  }

  ngOnInit() {
  }

}
