import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
  standalone: false
})
export class BuscarPage {
  searchTerms: string = '';


  constructor() { }

  filterItems() {
    console.log('buscando:', this.searchTerms);
  }

}
