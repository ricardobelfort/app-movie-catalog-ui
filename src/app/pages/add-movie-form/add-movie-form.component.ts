/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Movie } from 'src/app/models/movie.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie-form',
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['./add-movie-form.component.scss'],
})
export class AddMovieFormComponent implements OnInit {
  url = '/assets/icons/img.svg';
  movieForm!: FormGroup;
  movie: Movie;

  constructor(private router: Router) {
    this.movie = {} as Movie;
  }

  ngOnInit(): void {
    this.movieForm = new FormGroup({
      title: new FormControl(this.movie.title, [Validators.minLength(4)]),
      release_date: new FormControl(this.movie.release_date, [
        Validators.minLength(4),
      ]),
      genre: new FormControl(this.movie.genre, [Validators.minLength(4)]),
      vote_average: new FormControl(this.movie.vote_average, [
        Validators.minLength(1),
      ]),
      overview: new FormControl(this.movie.overview, [
        Validators.minLength(4),
        Validators.maxLength(150),
      ]),
      file: new FormControl(this.movie.file, [Validators.required]),
    });
  }

  get title() {
    return this.movieForm.get('title')!;
  }

  get release_date() {
    return this.movieForm.get('release_date')!;
  }

  get genre() {
    return this.movieForm.get('genre')!;
  }

  get vote_average() {
    return this.movieForm.get('vote_average')!;
  }

  get overview() {
    return this.movieForm.get('overview')!;
  }

  public validate(): void {
    if (this.movieForm.invalid) {
      for (const control of Object.keys(this.movieForm.controls)) {
        this.movieForm.controls[control].markAsTouched();
      }
      return;
    }

    this.movie = this.movieForm.value;

    console.info('Title:', this.movie.title);
    console.info('Release Date:', this.movie.release_date);
    console.info('Genre:', this.movie.genre);
    console.info('IMDB:', this.movie.vote_average);
    console.info('Overview:', this.movie.overview);
  }

  onSelectFile(e: any) {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e: any) => {
        this.url = e.target.result;
      };
    }
  }

  uploadFile() {
    console.log('enviou');
  }

  onSubmit(): void {
    if (this.movieForm.valid) {
      console.log(this.movieForm.value);
    }
  }

  onCancel() {
    this.movieForm.reset();
    this.url = '/assets/icons/img.svg';
    this.router.navigate(['/home']);
  }
}
