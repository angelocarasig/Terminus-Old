import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VndbService {

  constructor(private http: HttpClient) { }

  getUser(userid: string, username: string): Observable<any> {
    const params = {
      params: new HttpParams()
        .append('q', `u${userid}`)
        .append('q', username)
    };

    return this.http.get('https://api.vndb.org/kana/user', params);
  };

  getAuthInfo(authKey: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `token ${authKey}`);
    return this.http.get('https://api.vndb.org/kana/authinfo', { headers });
  }
}
