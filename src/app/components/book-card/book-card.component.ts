import { Component, Input } from '@angular/core';
import { UserNovel } from 'src/app/shared/models/UserNovel';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  @Input() novel: UserNovel;

  getBackgroundUrl(novel: UserNovel): string {
    return `url(${novel.vn.image.url})`;
  }
}
