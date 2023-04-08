import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VndbService {

  constructor(private http: HttpClient) { }

  getUser() {};

  getAuthInfo(authKey: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `token ${authKey}`);
    return this.http.get('https://api.vndb.org/kana/authinfo', { headers });
  }
}
