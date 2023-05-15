import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SettingsService } from 'src/app/services/settings/settings.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchQuery: string;
  navbarItems: MenuItem[];

  constructor(private settingsService: SettingsService) { };

  ngOnInit(): void {
    this.searchQuery = '';

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
        command: () => this.openSettings()
      }
    ]
  }

  openSettings(): any {
    console.log("Toggled settings.");
    this.settingsService.setRenderComponent(true);
  }
}
