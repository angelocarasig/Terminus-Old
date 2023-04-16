import { Injectable } from '@angular/core';
import { User } from './../../shared/models/User';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { USER_PERMISSIONS } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: User | null = null;

  constructor(private http: HttpClient) {}

  public async verifyUser(userToVerify: User): Promise<boolean> {
    const url = `${environment.apiUrl}${environment.endpoints.user}`;
    const params = new HttpParams()
    .append('q', `u${userToVerify.uid}`)
    .append('q', userToVerify.username);

    let valid: boolean = true;

    try {
      const response: any = await this.http.get(url, {params}).toPromise();

      for (let key in response) {
        const responseKey = response[key];
        if (responseKey == null || responseKey.username !== userToVerify.username || responseKey.id !== `u${userToVerify.uid}`) {
          valid = false;
          break;
        }
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

  let valid: boolean = true;

  try {
    const response: any = await this.http.get(url, { headers }).toPromise();
    
    for (let key in response) {
      if (response.hasOwnProperty(key)) {
        valid = this._verifyTokenResponseKeys(userTokenToVerify, key, response[key]);
      }
      else valid = false;
    }
  } catch (error) {
    console.error(error);
    valid = false;
  }

  return valid;
}

  private _verifyTokenResponseKeys(userTokenToVerify: User, responseKey: string, reponseValue: any,): boolean {
    let valid: boolean = true;
    switch (responseKey) {
      case 'permissions':
        reponseValue.forEach((permission: string) => {
          valid = USER_PERMISSIONS.includes(permission);
        });
        break;

      case 'username':
        valid = reponseValue === userTokenToVerify.username;
        break;

      case 'id':
        valid = reponseValue === `u${userTokenToVerify.uid}`;
        break;

      default:
        valid = false;
    }
    return valid;
  }

  public setCurrentUser(user: User): void {
    this.currentUser = user;
  }

  public getCurrentUser(): User | null {
    return this.currentUser;
  }
}
