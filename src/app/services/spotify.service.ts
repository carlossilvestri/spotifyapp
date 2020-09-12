import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Servicio de Spotify');
  }
  getQuery(query: string): any{
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDCfi7TI_ditJiE76DBrqSv0yeTsECMbE5cQplNKO-e9LOfv5qrP61VAThEJISaeK-w7db5HBnmTfGlxXI'
    });
    return this.http.get(url, {headers});
  }
  getNewReleases(): any{
    return this.getQuery('browse/new-releases')
                      .pipe(map(data => {
                         // tslint:disable-next-line: no-string-literal
                         return data['albums'].items;
                       }));
  }
  getArtistas(termino: string): any{
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe(map(data => {
       // tslint:disable-next-line: no-string-literal
       return data['artists'].items;
     }));
  }
  getArtista(id: string): any{
    return this.getQuery(`artists/${id}`);
    // .pipe(map(data => {
    //    // tslint:disable-next-line: no-string-literal
    //    return data['artists'].items;
    //  }));
  }
  getTopTracks(id: string): any{
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
                .pipe(map(data => {
                  // tslint:disable-next-line: no-string-literal
                   return data['tracks'];
                 }));
  }
}
