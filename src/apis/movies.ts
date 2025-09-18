import { MovieListResponse, MovieDetails } from "@/interfaces/movie";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async (page: number = 1): Promise<MovieListResponse> => {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
  if (!res.ok) throw new Error("Failed to fetch popular movies");
  return res.json();
};

export const getMovieDetails = async (id: string): Promise<MovieDetails> => {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=credits`);
  if (!res.ok) throw new Error("Failed to fetch movie details");
  return res.json();
};

export const searchMovies = async (query: string, page: number = 1): Promise<MovieListResponse> => {
  const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`);
  if (!res.ok) throw new Error("Failed to search movies");
  return res.json();
};
