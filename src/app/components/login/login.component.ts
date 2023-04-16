import { Component, OnInit } from '@angular/core';
import { VndbService } from '../../services/vndb/vndb.service';
import { LOGIN_MODES } from 'src/app/constants';
import { User } from 'src/app/shared/models/User';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginModes: Array<string>;

  loginMode: string;
  uid: number;
  username: string;
  apitoken: string;

  loading: boolean = false;
  validUserDetails: boolean;
  errorMessage: string;

  constructor(private userService: UserService, private vndbService: VndbService) {}

  ngOnInit(): void {
    this.loginModes = LOGIN_MODES;

    this.validUserDetails = true;
    this.errorMessage = '';
  }

  async verifyLoginDetails(): Promise<void> {
    this.loading = true;

    const userDetails = new User(
      this.userService, 
      this.loginMode, 
      this.uid, 
      this.username, 
      this.loginMode === 'Auth' ? this.apitoken : undefined
    );

    try {
      const isUserValid = await userDetails.verifyUser();
      if (!isUserValid) {
        this.validUserDetails = false;
        this.errorMessage = 'Invalid User ID or Username';
        return;
      }
  
      if (this.loginMode === 'Auth') {
        const isTokenValid = await userDetails.verifyToken();
        if (!isTokenValid) {
          this.validUserDetails = false;
          this.errorMessage = 'Invalid API Token';
          return;
        }
      }
  
      console.log("Valid!");
      this.validUserDetails = true;
      this.userService.setCurrentUser(userDetails);
  
    } catch (error) {
      console.error(error);
      this.validUserDetails = false;
      this.errorMessage = 'An error occurred during login';
    } finally {
      this.loading = false;
    }
  }
}