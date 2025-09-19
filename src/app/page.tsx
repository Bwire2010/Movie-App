"use client";

import { useState } from "react";
import { usePopularMovies, useSearchMovies } from "@/hooks/useMovies";
import MovieCard from "@/components/MovieCard";
import Pagination from "@/components/Pagination";
import Loader from "@/components/Loader";
import HeroScroller from "@/components/HeroScroller";
import SearchBar from "@/components/SearchBar";
import LoginForm from "@/components/LoginForm";
import { Movie } from "@/interfaces/movie";
import { useAuth } from "@/contexts/AuthContext";

export default function Home() {
  const { user } = useAuth(); 
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: popularData,
    isLoading: isPopularLoading,
    isError: isPopularError,
  } = usePopularMovies(page);

  const {
    data: searchData,
    isLoading: isSearchLoading,
    isError: isSearchError,
  } = useSearchMovies(searchQuery, page);

  // Decide which dataset to use
  const movies = searchQuery ? searchData?.results : popularData?.results;
  const totalPages = searchQuery
    ? searchData?.total_pages ?? 1
    : popularData?.total_pages ?? 1;

  return (
    <div className="mx-auto flex flex-col items-center">
      {/* Always show HeroScroller */}
      {popularData?.results && (
        <HeroScroller movies={popularData.results.slice(0, 6)} />
      )}

      {/* Show login form if not logged in */}
      {!user ? (
        <LoginForm />
      ) : (
        <>
          {/* 🔍 Search Section */}
          <SearchBar
            onSearch={(query) => {
              setSearchQuery(query);
              if (query.trim() !== "") {
                setPage(1); // reset only when searching
              }
            }}
          />

          {/* Movies Section */}
          <div className="w-[94%] md:w-[86%] mx-auto">
            {isPopularLoading || isSearchLoading ? (
              <div className="flex justify-center items-center py-10">
                <Loader />
              </div>
            ) : isPopularError || isSearchError ? (
              <p className="text-red-500 text-center py-10">
                Failed to load movies.
              </p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {movies?.map((movie: Movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            )}

            {/*  Pagination */}
            {movies && movies.length > 0 && (
              <Pagination page={page} totalPages={totalPages} setPage={setPage} />
            )}
          </div>
        </>
      )}
    </div>
  );
}
