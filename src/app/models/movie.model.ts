export interface Movie {
  id: number | null | undefined;
  title?: string | null | undefined;
  genre: string | null | undefined;
  overview: string | null | undefined;
  popularity: number | null | undefined;
  poster_path: string | null | undefined;
  release_date: string | null | undefined;
  revenue: number | null | undefined;
  runtime: number | null | undefined;
  status: string | null | undefined;
  tagline: string | null | undefined;
  vote_average: number | null | undefined;
  file: string;
}
