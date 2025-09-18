
import { useQuery } from "@tanstack/react-query";
import { getPopularMovies, getMovieDetails, searchMovies } from "@/apis/movies";

export const usePopularMovies = (page: number) =>
  useQuery({
    queryKey: ["popular-movies", page],
    queryFn: () => getPopularMovies(page),
  });

export const useMovieDetails = (id: string) =>
  useQuery({
    queryKey: ["movie-details", id],
    queryFn: () => getMovieDetails(id),
  });

export const useSearchMovies = (query: string, page: number) =>
  useQuery({
    queryKey: ["search-movies", query, page],
    queryFn: () => searchMovies(query, page),
    enabled: !!query,
  });
