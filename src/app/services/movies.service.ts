import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { map, take } from 'rxjs/operators';
import { NowPlaying } from './../pages/models/nowPlaying.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private readonly baseUrl = environment.apiUrl;
  private readonly baseApiKey = environment.apiKey;

  constructor(private httpCliente: HttpClient) {}

  nowPlaying() {
    return this.httpCliente.get<NowPlaying>(
      `${this.baseUrl}now_playing?api_key=${this.baseApiKey}&language=pt-BR&page=1`
    ).pipe(
      take(1),
      map(value => value.results),
    );
  }
}
