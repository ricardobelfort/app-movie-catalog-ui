import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-movie-form',
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['./add-movie-form.component.scss'],
})
export class AddMovieFormComponent {
  url = '/assets/icons/img.svg';

  movieForm = new FormGroup({
    author: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    inputFile: new FormControl(''),
  });

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
