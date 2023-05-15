import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SAMPLE_NOVEL } from 'src/app/constants';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/shared/models/User';
import { UserNovel } from 'src/app/shared/models/UserNovel';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss']
})
export class BookshelfComponent implements OnInit {
  public currentUser: User | null = null;
  userNovels: UserNovel[] | null | undefined = SAMPLE_NOVEL;

  constructor(private userService: UserService, private router: Router) {};

  ngOnInit(): void {
    this.userService.getCurrentUser$().subscribe(user => {
      this.currentUser = user;
      this.userNovels = this.currentUser?.ulist;
    });

    if (this.currentUser == null) {
      this.router.navigate(['']);
    }
  }
}
