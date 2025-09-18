"use client";

import { useState } from "react";
import { usePopularMovies } from "@/hooks/useMovies";
import MovieCard from "@/components/MovieCard";
import Pagination from "@/components/Pagination";
import Loader from "@/components/Loader";

export default function Home() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = usePopularMovies(page);

  if (isLoading) return <Loader />;
  if (isError) return <p className="text-red-500">Failed to load movies.</p>;

  return (
    <div className="w-[90%] mx-auto">


      <h1 className="text-3xl font-bold mb-12">Popular Movies</h1>
      <div className="bg-red-500 sm:bg-blue-500 md:bg-green-500 lg:bg-purple-500 text-white p-4">
        Tailwind breakpoint test
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {data?.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination page={page} totalPages={data?.total_pages ?? 1} setPage={setPage} />
    </div>
  );
}
