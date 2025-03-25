import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
  standalone: false
})
export class BuscarPage implements OnInit {
  searchTerms: string = '';


  usuarios = [
    { username: 'capi_team',name:'capibaras🦫✨', followers: 1200, following: false,image:'assets/images/capi.jpg' },
    { username: 'madai_loc', followers: 950, following: true ,image:'assets/imgs/madai-profile.jpg'},
    { username: 'teoch_bill', followers: 470, following: false ,image:'assets/imgs/teoch-profile.jpg'},
  ];

  filteredUsers = [...this.usuarios]; 

  constructor() {}

  ngOnInit() {
    this.filterItems(); 
  }

  filterItems() {
    const term = this.searchTerms.toLowerCase();
    this.filteredUsers = this.usuarios.filter(user =>
      user.username.toLowerCase().includes(term)
    );
  }

  followUser(user: any) {
    user.following = !user.following;
  }
}
