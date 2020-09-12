import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  loadingArtist: boolean;
  topTracks: any = [];
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loadingArtist = true;
    this.router.params.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      this.getArtista(params['id']);
      // tslint:disable-next-line: no-string-literal
      this.getTopTracks(params['id']);
    });
   }

  ngOnInit(): void {
  }
  getArtista(id: string): void{
    this.loadingArtist = true;
    this.spotify.getArtista(id)
                .subscribe(artista => {
                  // console.log(artista);
                  this.artista = artista;
                  this.loadingArtist = false;
                });
  }
  getTopTracks(id: string): void{
    this.spotify.getTopTracks(id)
                .subscribe(topTracks => {
                  console.log(topTracks);
                  this.topTracks = topTracks;
                });
  }

}
