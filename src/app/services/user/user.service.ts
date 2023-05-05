import { Injectable } from '@angular/core';
import { User } from './../../shared/models/User';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { USER_PERMISSIONS } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser$ = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) {}

  public async verifyUser(userToVerify: User): Promise<boolean> {
    const url = `${environment.apiUrl}${environment.endpoints.user}`;
    const params = new HttpParams().append('q', userToVerify.username);
    let valid = true;

    try {
      const response: any = await this.http.get(url, { params }).toPromise();
      valid = response[userToVerify.username] != null;

      if (valid) {
        userToVerify.uid = parseInt(response[userToVerify.username].id.substring(1), 10);
      }

    } catch (error) {
      console.error(error);
      valid = false;
    }

    return valid;
  }

  public async verifyToken(userTokenToVerify: User): Promise<boolean> {
    const url = `${environment.apiUrl}${environment.endpoints.authinfo}`;
    const headers = new HttpHeaders().set('Authorization', `token ${userTokenToVerify.apiToken}`);
    let valid = true;

    try {
      const response: any = await this.http.get(url, { headers }).toPromise();

      for (let key in response) {
        if (response.hasOwnProperty(key)) {
          valid = this._verifyTokenResponseKeys(userTokenToVerify, key, response[key]);
        } else {
          valid = false;
        }
      }
    } catch (error) {
      console.error(error);
      valid = false;
    }

    return valid;
  }

  private _verifyTokenResponseKeys(userTokenToVerify: User, responseKey: string, responseValue: any): boolean {
    let valid = true;
    switch (responseKey) {
      case 'permissions':
        responseValue.forEach((permission: string) => {
          valid = USER_PERMISSIONS.includes(permission);
        });
        break;

      case 'username':
        valid = responseValue === userTokenToVerify.username;
        break;

      case 'id':
        valid = responseValue === `u${userTokenToVerify.uid}`;
        break;

      default:
        valid = false;
    }
    return valid;
  }

  public setCurrentUser(user: User): void {
    this.currentUser$.next(user);
  }

  public getCurrentUser$() {
    return this.currentUser$.asObservable();
  }
}
