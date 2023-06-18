import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { ImageSensitivity, SettingOption, Settings } from '../models/Settings';
import { SettingsService } from 'src/app/services/settings/settings.service';

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

  settings: Settings;
  ImageSensitivityOptions: ImageSensitivity[];
  selectedImageSensitivity: ImageSensitivity;

  constructor(private settingsService: SettingsService) { };

  ngOnInit(): void {
    this.searchQuery = '';
    this.displaySettings = false;

    this.navbarItems = [
      { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
      { label: 'Statistics', icon: 'pi pi-chart-bar', command: () => {console.error("NOT IMPLEMENTED YET: 'Statistics'")} },
      { label: 'Settings', icon: 'pi pi-cog', command: () => this.toggleSettings() }
    ]

    this.settingTabs = [
      { label: SettingOption.General, icon: 'pi pi-fw pi-globe', command: () => this.onTabChange(this.settingTabs[0]) },
      { label: SettingOption.Novel, icon: 'pi pi-fw pi-book', command: () => this.onTabChange(this.settingTabs[1]) },
      { label: SettingOption.User, icon: 'pi pi-fw pi-user', command: () => this.onTabChange(this.settingTabs[2]) },
    ]

    this.ImageSensitivityOptions = [
      { label: "Safe", value: ImageSensitivity.Safe },
      { label: "Questionable", value: ImageSensitivity.Questionable },
      { label: "Explicit", value: ImageSensitivity.Explicit }
    ]

    this.activeTab = this.settingTabs[0];

    this.settingsService.getOptions().subscribe(settings => {
      this.settings = settings;
    });

    this.selectedImageSensitivity = this.settings.imageSensitivity;
  }

  toggleSettings(): void {
    this.displaySettings = !this.displaySettings;
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

  onTabChange(newActiveTab: any): void {
    this.activeTab = newActiveTab;
  }

  getImageSensitivityLabel(): string {
    switch(this.selectedImageSensitivity) {
      case ImageSensitivity.Safe:
        return "Safe";
      case ImageSensitivity.Questionable:
        return "Questionable";
      case ImageSensitivity.Explicit:
        return "Explicit";
    }
    return "Unknown";
  }

  onImageSensitivityChange(): void {
    this.settingsService.toggleImageSensitivity(this.selectedImageSensitivity);
  }
}
