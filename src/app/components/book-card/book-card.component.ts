import { Component, Input, OnInit } from '@angular/core';
import { UserNovel } from 'src/app/shared/models/UserNovel';
import { SettingsService } from 'src/app/services/settings/settings.service';
import { ImageSensitivity, Settings } from 'src/app/shared/models/Settings';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input() novel: UserNovel;

  settings: Settings;

  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    this.settingsService.getOptions().subscribe(settings => {
      this.settings = settings;
    });
  }

  getBackgroundUrl(novel: UserNovel): string {
    return `url(${novel.vn.image.url})`;
  }

  onClick(): void {
    console.log(this.novel);
  }

  verifyBlurEffect(): boolean {
    let shouldBlur: boolean;

    switch (this.settings.imageSensitivity) {
      case ImageSensitivity.Safe:
        shouldBlur = this.novel.vn.image.sexual > 0;
        break;

      case ImageSensitivity.Questionable:
        shouldBlur = this.novel.vn.image.sexual > 1;
        break;

      case ImageSensitivity.Explicit:
        shouldBlur = false;
        break;

      default:
        shouldBlur = false;
        break;
      }
    
    return shouldBlur;
  }
}
