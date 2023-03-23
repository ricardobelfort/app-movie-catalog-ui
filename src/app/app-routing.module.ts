import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { AddMovieFormComponent } from './pages/add-movie-form/add-movie-form.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: MovieListComponent,
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'adicionar',
    component: AddMovieFormComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
