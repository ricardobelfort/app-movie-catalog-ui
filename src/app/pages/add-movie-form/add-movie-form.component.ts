import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-movie-form',
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['./add-movie-form.component.scss'],
})
export class AddMovieFormComponent {
  url = '/assets/icons/img.svg';
  movieForm = this.fb.group({
    author: ['', Validators.required, Validators.minLength(4)],
    title: ['', Validators.required, Validators.minLength(4)],
    description: ['', Validators.required, Validators.minLength(4)],
    inputFile: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  get author() {
    return this.movieForm.get('author');
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

  onSubmit() {
    console.log(this.movieForm.value);
  }

  onCancel() {
    this.movieForm.reset();
    this.url = '/assets/icons/img.svg';
  }
}
