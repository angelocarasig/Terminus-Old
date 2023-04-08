import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;

  login(username: string, password: string): Observable<boolean> {
    if (username === 'user' && password === 'password') {
      this.loggedIn = true;
      return of(true);
    } else {
      this.loggedIn = false;
      return of(false);
    }
  }

  logout(): void {
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
