import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ImageSensitivity, Settings } from 'src/app/shared/models/Settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private settings = new BehaviorSubject<Settings>(new Settings());

  constructor() {}

  getOptions(): BehaviorSubject<Settings> {
    return this.settings;
  }

  toggleImageSensitivity(updatedImageSensitivity: ImageSensitivity) {
    this.settings.value.imageSensitivity = updatedImageSensitivity;
    this.settings.next(this.settings.value);
  }
}
