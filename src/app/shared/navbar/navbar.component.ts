import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchQuery: string = '';
  navbarItems: MenuItem[] = [];

  constructor() { };

  ngOnInit(): void {
    this.navbarItems = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/'
      },
      {
        label: 'Profile',
        icon: 'pi pi-user',
        routerLink: '/'
      },
      {
        label: 'Placeholder A',
        icon: 'pi pi-home',
        routerLink: '/'
      },
      {
        label: 'Placeholder B',
        icon: 'pi pi-home',
        routerLink: '/'
      },
      {
        label: 'Placeholder C',
        icon: 'pi pi-home',
        routerLink: '/'
      },
    ]

  }
}
