export interface Movie {
  id: number | null | undefined;
  title: string | null | undefined;
  genres: Genre[];
  overview: string | null | undefined;
  popularity: number | null | undefined;
  poster_path: string | null | undefined;
  release_date: string | null | undefined;
  revenue: number | null | undefined;
  runtime: number | null | undefined;
  status: string | null | undefined;
  tagline: string | null | undefined;
  vote_average: number | null | undefined;
}

interface Genre {
  id: number | null | undefined;
  name: string | null | undefined;
}
