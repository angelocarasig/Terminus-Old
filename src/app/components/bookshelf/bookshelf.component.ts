import { Component, OnInit } from '@angular/core';
import { SAMPLE_NOVEL } from 'src/app/constants';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss']
})
export class BookshelfComponent implements OnInit {  
  public currentUser: User | null = null;
  userNovels = SAMPLE_NOVEL;
  
  constructor(private userService: UserService) {};

  ngOnInit(): void {
    this.userService.getCurrentUser$().subscribe(user => {
      this.currentUser = user;
    });
  }
}
