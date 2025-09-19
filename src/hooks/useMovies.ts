import { useQuery } from "@tanstack/react-query";
import { getPopularMovies, getMovieDetails, searchMovies } from "@/apis/movies";
import type { MovieListResponse, MovieDetails } from "@/interfaces/movie";

export const usePopularMovies = (page: number) =>
  useQuery<MovieListResponse, Error>({
    queryKey: ["popular-movies", page],
    queryFn: () => getPopularMovies(page),
    placeholderData: (prev) => prev, // replaces keepPreviousData in v5+
  });

export const useMovieDetails = (id: string) =>
  useQuery<MovieDetails, Error>({
    queryKey: ["movie-details", id],
    queryFn: () => getMovieDetails(id),
  });

export const useSearchMovies = (query: string, page: number) =>
  useQuery<MovieListResponse, Error>({
    queryKey: ["search-movies", query, page],
    queryFn: () => searchMovies(query, page),
    enabled: !!query,
    placeholderData: (prev) => prev, // ✅ same trick
  });
