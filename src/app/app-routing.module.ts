import { MovieResolver } from './guards/movie.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { AddMovieFormComponent } from './pages/add-movie-form/add-movie-form.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: MovieListComponent,
  },
  {
    path: 'novo',
    component: AddMovieFormComponent,
    resolve: { movie: MovieResolver }
  },
  {
    path: 'movie/:id',
    component: MovieDetailComponent,
    resolve: { movie: MovieResolver }
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
