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
      Authorization: 'Bearer BQCUa8t7c-_a1QZ0_Q7OujjHkhiwdMoQ98pilHTrcG_dnEi5TaKJciWIF2ARN5qed1d3LHMWyylp0HDqQG02xJi7JTpzj830I1OBA0ZNvSzZ90Z20cC6Jdp0JqKZfHiy_gQX7Wj2pbv_dXbT4ocBXj886h66Dtf6wNiJS9dIspLhY4BMTN1x-drQTu02qbCLf1lAOQdnn9pML4w3zLVMiJQ'
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
