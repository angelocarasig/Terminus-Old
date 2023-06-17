import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { SettingOption } from '../models/Settings';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchQuery: string;
  navbarItems: MenuItem[];

  displaySettings: boolean;

  activeTab: MenuItem;
  settingTabs: MenuItem[];

  constructor() { };

  ngOnInit(): void {
    this.searchQuery = '';
    this.displaySettings = false;

    this.navbarItems = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/'
      },
      {
        label: 'Statistics',
        icon: 'pi pi-chart-bar',
        // routerLink: '/'
        command: () => {console.error("NOT IMPLEMENTED YET: 'Statistics'")}
      },
      {
        label: 'Settings',
        icon: 'pi pi-cog',
        command: () => this.toggleSettings()
      }
    ]

    this.settingTabs = [
      { label: SettingOption.General, icon: 'pi pi-fw pi-globe', command: () => this.onTabChange(this.settingTabs[0]) },
      { label: SettingOption.Novel, icon: 'pi pi-fw pi-book', command: () => this.onTabChange(this.settingTabs[1]) },
      { label: SettingOption.User, icon: 'pi pi-fw pi-user', command: () => this.onTabChange(this.settingTabs[2]) },
    ]

    this.activeTab = this.settingTabs[0];
  }

  toggleSettings(): void {
    this.displaySettings = !this.displaySettings;
    console.log(`Settings toggled ${this.displaySettings ? "On" : "Off"}`);
  }

  goToUrl(url: string): void {
    window.open(url, "_blank");
  }

  goToChangelog(): void {
    console.error("NOT IMPLEMENTED YET: 'Changelog'")
  }

  goToAbout(): void {
    console.error("NOT IMPLEMENTED YET: 'About'")
  }

  getActiveTab(): string {
    return this.activeTab.label != null ? `${this.activeTab.label} Settings` : 'Unknown';
  }

  onTabChange(newActiveTab: MenuItem): void {
    this.activeTab = newActiveTab;
  }
}
