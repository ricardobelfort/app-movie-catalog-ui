import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie-form',
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['./add-movie-form.component.scss'],
})
export class AddMovieFormComponent {
  url = '/assets/icons/img.svg';
  movieForm = this.fb.group({
    title: ['', Validators.required],
    releaseYear: ['', Validators.required],
    genre: ['', Validators.required],
    imdb: ['', Validators.required],
    overview: ['', Validators.required],
    inputFile: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  onSelectFile(e: any) {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e: any) => {
        this.url = e.target.result;
      };
    }
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
