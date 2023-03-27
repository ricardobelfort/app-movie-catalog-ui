import { MoviesService } from 'src/app/services/movies.service';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Movie } from './../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieResolver implements Resolve<Movie> {
  constructor(private movieService: MoviesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Movie> {
    if (route.params && route.params['id']) {
      return this.movieService.getMovieById(route.params['id']);
    }
    return of({
      id: 0,
      title: '',
      genres: [],
      overview: '',
      popularity: 0,
      poster_path: '',
      release_date: '',
      revenue: 0,
      runtime: 0,
      status: '',
      tagline: '',
      vote_average: 0,
    });
  }
}
