import { Component } from '@angular/core';
import { SAMPLE_NOVEL } from 'src/app/constants';
import { UserNovel } from 'src/app/shared/models/UserNovel';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss']
})
export class BookshelfComponent {
  items = new Array<UserNovel>(SAMPLE_NOVEL);
}
