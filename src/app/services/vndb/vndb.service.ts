import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VndbService {
  novels: Array<any>;
  constructor(private http: HttpClient) {}

  getUser(userid: string, username: string): Observable<any> {
    const params = {
      params: new HttpParams().append('q', `u${userid}`).append('q', username),
    };

    return this.http.get('https://api.vndb.org/kana/user', params);
  }

  getAuthInfo(authKey: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `token ${authKey}`);
    return this.http.get('https://api.vndb.org/kana/authinfo', { headers });
  }

  getVnList(userid: string, pageNumber: number): Array<any> {
    this.novels = [];

    this._getVnList(userid, 1, []).subscribe({
      next: (novels: Array<any>) => {
        novels = novels.concat(novels);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
    
    return this.novels;
  }

  private _getVnList(userid: string, pageNumber: number, novels: Array<any>): any {
    const body = {
      user: `u${userid}`,
      results: '100',
      page: pageNumber,
    };
  
    return this.http.post('https://api.vndb.org/kana/ulist', body).pipe(
      tap((response: any) => {
        response.results.forEach((element: any) => {
          novels.push(element.id);
        });
        if (response.more) {
          return this._getVnList(userid, pageNumber + 1, novels).subscribe({
            next: (moreNovels: Array<any>) => {
              novels = novels.concat(moreNovels);
            },
            error: (error: any) => {
              console.log(error);
            }
          });
        }
      }),
      switchMap(() => {
        return of(novels);
      })
    );
  }
  
}
