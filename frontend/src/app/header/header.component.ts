import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/users';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  user: User;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(
      () => this.getFromLocalStorage()
    )
  }

  getFromLocalStorage() {
    const localStorageUser = localStorage.getItem('user');
    if(localStorageUser) {
      this.user = JSON.parse(localStorageUser) as User;
    }
  }

  logOut() {
    localStorage.removeItem('user');
    this.user = undefined;
    this.getFromLocalStorage();
    this.router.navigateByUrl('allWorkshops');
  }

}
