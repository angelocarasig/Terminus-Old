import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VndbService {
  private readonly ulistUrl = 'https://api.vndb.org/kana/ulist';

  constructor(private http: HttpClient) {}

  // Fetches user information and checks if it matches the given userid and username
  getUser(userid: string, username: string): Observable<boolean> {
    // Build HttpParams with the given userid and username
    const params = new HttpParams()
    .append('q', `u${userid}`)
    .append('q', username);

    // Send GET request and process the response
    return this.http.get('https://api.vndb.org/kana/user', { params }).pipe(
      map((response: any) => {
        // Check if the response contains any user with the matching username and userid
        return Object.values(response).some((user: any) => user && user.username === username && user.id === `u${userid}`);
      })
    );
  }

  // Fetches the authentication information with the given authKey and returns the permissions array
  getAuthInfo(authKey: string): Array<string> {
    // Set the Authorization header with the given authKey
    const headers = new HttpHeaders().set('Authorization', `token ${authKey}`);
    var permissions: Array<string> = [];

    // Send GET request and process the response
    this.http.get('https://api.vndb.org/kana/authinfo', { headers }).pipe(
      map((response: any) => {
        permissions = response.permissions;
      })
    );

    return permissions;
  }

  // Fetches the user's visual novel list and returns an array of visual novel IDs
  getUserVisualNovelList(userid: string): Array<any> {
    // Define the fields to be fetched from the API
    const fields = "id,title,alttitle,titles,titles.lang,titles.title,titles.latin,titles.official,titles.main,aliases,olang,devstatus,released,languages,platforms,image,image.id,image.url,image.dims,image.sexual,image.violence,image.votecount,length,length_minutes,length_votes,description,rating,popularity,votecount,screenshots,screenshots.*,screenshots.thumbnail,screenshots.thumbnail_dims,screenshots.release.*,tags,tags.rating,tags.spoiler,tags.lie,tags.*";
    const body = { user: `u${userid}`, results: 100, page: 1, fields };

    const vnIDs: number[] = [];
    let more = true;

    // Fetch and process visual novel list pages until there are no more pages
    while (more) {
      try {
        const response: any = this.fetchVisualNovelList(body);
        if (!response) break;

        // Extract visual novel IDs from the current page and add them to the vnIDs array
        const currentPageVnIDs = response['results'].map((item: any) => item.id);
        vnIDs.push(...currentPageVnIDs);
        more = response['more'];

        // If there are more pages, increment the page number
        if (more) body.page += 1;
      } catch (error) {
        console.error(error);
        break;
      }
    }

    return vnIDs;
  }

    // Private method to fetch a single page of visual novels for the given user
    private fetchVisualNovelList(body: { user: string; results: number; page: number; fields: string }): any {
      return this.http.post<any>(this.ulistUrl, body);
  }
}