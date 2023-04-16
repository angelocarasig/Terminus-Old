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

  getUserVisualNovelList(uid: string): Array<any> {
    // Define the fields to be fetched from the API
    const fields = "id,title,alttitle,titles,titles.lang,titles.title,titles.latin,titles.official,titles.main,aliases,olang,devstatus,released,languages,platforms,image,image.id,image.url,image.dims,image.sexual,image.violence,image.votecount,length,length_minutes,length_votes,description,rating,popularity,votecount,screenshots,screenshots.*,screenshots.thumbnail,screenshots.thumbnail_dims,screenshots.release.*,tags,tags.rating,tags.spoiler,tags.lie,tags.*";
    const body = { user: `u${uid}`, results: 100, page: 1, fields };

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