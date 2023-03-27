import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { Movies } from '../models/movies.model';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {

  movies: Observable<Movies[]>;
  posterPath = environment.posterPath;

  constructor(private moviesService: MoviesService) {
    this.movies = this.moviesService.nowPlaying();
  }
}
