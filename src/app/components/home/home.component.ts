import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];
  loading: boolean;
  errorS: boolean;
  mensajeError: string;

  constructor(private http: HttpClient, private spotify: SpotifyService) {
    this.loading = true;
    this.errorS = false;
    this.spotify.getNewReleases()
                .subscribe(data => {
                  this.nuevasCanciones = data;
                  this.loading = false;
                  // console.log(this.nuevasCanciones);
                }, (error) => {
                  console.log(error.error.error.message);
                  this.loading = false;
                  this.errorS = true;
                  this.mensajeError = error.error.error.message;
                });
   }

  ngOnInit(): void {
  }

}
