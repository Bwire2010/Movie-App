export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number; // added
  runtime: number; // added
}

export interface MovieListResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface MovieDetails extends Movie {
  genres: { id: number; name: string }[];
  production_companies: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  credits: {
    cast: {
      id: number;
      name: string;
      character: string;
      profile_path: string | null; // allow null
    }[];
    crew: {
      id: number;
      name: string;
      job: string;
      profile_path: string | null; // allow null
    }[];
  };
}
