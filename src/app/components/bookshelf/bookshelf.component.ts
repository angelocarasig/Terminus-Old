import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { NovelStatus } from 'src/app/constants';
import { SettingsService } from 'src/app/services/settings/settings.service';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/shared/models/User';
import { UserNovel } from 'src/app/shared/models/UserNovel';
import { Label } from 'src/app/shared/models/UserNovel';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss']
})
export class BookshelfComponent implements OnInit {
  public currentUser: User | null = null;
  userNovels: UserNovel[] | null | undefined;
  novelTabs = [
    { label: NovelStatus.All, icon: 'pi pi-fw pi-globe' },
    { label: NovelStatus.Completed, icon: 'pi pi-fw pi-check' },
    { label: NovelStatus.Playing, icon: 'pi pi-fw pi-book' },
    { label: NovelStatus.OnHold, icon: 'pi pi-fw pi-pause' },
    { label: NovelStatus.Wishlist, icon: 'pi pi-fw pi-star' },
  ]

  activeTab: MenuItem;

  displaySettings$: Observable<boolean>;

  constructor(private userService: UserService, private settingsService: SettingsService, private router: Router) {};

  ngOnInit(): void {
    this.userService.getCurrentUser$().subscribe(user => {
      this.currentUser = user;
      this.userNovels = this.currentUser?.ulist;
    });

    if (this.currentUser == null) {
      this.router.navigate(['']);
    }

    this.activeTab = this.novelTabs[0];

    this.displaySettings$ = this.settingsService.shouldRenderComponent();
  }

  onTabChange(event: any): void {
    let targetTab: NovelStatus = event.label;

    switch (targetTab) {
      case NovelStatus.All:
        this.userNovels = this.currentUser?.ulist;
        break;

      case NovelStatus.Playing:
        this.userNovels = this.currentUser?.ulist?.filter((novel: UserNovel) => {
          if (novel.labels.find(label => label.id === 1)) {
            return novel;
          }
          return null;
        })
        break;

      case NovelStatus.Completed:
        this.userNovels = this.currentUser?.ulist?.filter((novel: UserNovel) => {
          if (novel.labels.find(label => label.id === 2)) {
            return novel;
          }
          return null;
        })
        break;

      case NovelStatus.OnHold:
        this.userNovels = this.currentUser?.ulist?.filter((novel: UserNovel) => {
          if (novel.labels.find(label => label.id === 3)) {
            return novel;
          }
          return null;
        })
        break;

      case NovelStatus.Wishlist:
        this.userNovels = this.currentUser?.ulist?.filter((novel: UserNovel) => {
          if (novel.labels.find(label => label.id === 5)) {
            return novel;
          }
          return null;
        })
        break;
    }
  }
}
