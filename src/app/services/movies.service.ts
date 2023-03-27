import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { NowPlaying } from '../models/nowPlaying.model';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private readonly baseUrl = environment.apiUrl;
  private readonly baseApiKey = '?api_key=' + environment.apiKey;
  private readonly lang = 'language=pt-BR';
  private readonly page = 'page=1';

  constructor(private httpCliente: HttpClient) {}

  GetAllMoviesNowPlaying() {
    return this.httpCliente
      .get<NowPlaying>(
        `${this.baseUrl}now_playing${this.baseApiKey}&${this.lang}&${this.page}`
      )
      .pipe(
        take(1),
        map((value) => value.results)
      );
  }

  getMovieById(id: number) {
    return this.httpCliente.get<Movie>(
      `${this.baseUrl}${id}${this.baseApiKey}&${this.lang}`
    );
  }
}
