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
        label: 'Statistics',
        icon: 'pi pi-chart-bar',
        routerLink: '/'
      },
      {
        label: 'Settings',
        icon: 'pi pi-cog',
        routerLink: '/'
      }
    ]

  }
}
