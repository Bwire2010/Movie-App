"use client";

import { useState } from "react";
import { usePopularMovies, useSearchMovies } from "@/hooks/useMovies";
import MovieCard from "@/components/MovieCard";
import Pagination from "@/components/Pagination";
import Loader from "@/components/Loader";
import HeroScroller from "@/components/HeroScroller";
import SearchBar from "@/components/SearchBar";

export default function Home() {
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
      <h1 className="text-3xl font-bold mb-6 w-full text-left">Popular Movies</h1>

      {popularData?.results && (
        <HeroScroller movies={popularData.results.slice(0, 6)} />
      )}

      {/* 🔍 Search Section */}
      <SearchBar
        onSearch={(query) => {
          setPage(1); // reset to first page
          setSearchQuery(query);
        }}
      />

      {/* 🎬 Movies Section */}
      <div className="w-[86%] mx-auto">
        {isPopularLoading || isSearchLoading ? (
          <div className="flex justify-center items-center py-10">
            <Loader />
          </div>
        ) : isPopularError || isSearchError ? (
          <p className="text-red-500 text-center py-10">
            Failed to load movies.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}

        {/* Pagination should still show if we have movies */}
        {movies && movies.length > 0 && (
          <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        )}
      </div>
    </div>
  );
}

