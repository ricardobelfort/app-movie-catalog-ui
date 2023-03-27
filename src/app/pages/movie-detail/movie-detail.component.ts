import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent {
  posterPath = environment.posterPath;
  movieDetail: Movie;

  constructor(private route: ActivatedRoute) {
    this.movieDetail = this.route.snapshot.data['movie'];
  }
}
