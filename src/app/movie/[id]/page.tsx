"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useMovieDetails } from "@/hooks/useMovies";
import Loader from "@/components/Loader";
import PersonCard from "@/components/PersonCard";

export default function MovieDetailsPage() {
    const { id } = useParams<{ id: string }>();
    const { data: movie, isLoading, isError } = useMovieDetails(id);

    if (isLoading) return <Loader />;
    if (isError || !movie) return <p className="text-red-500">Failed to load movie details.</p>;

    return (
        <div className="mx-auto p-4 w-[90%]">
            {/* Back Button */}
            <Link href="/" className="text-blue-600 hover:text-blue-200 mb-4 block">
                ← Back to Movies
            </Link>

            {/* Top Section */}
            <div className="flex flex-col md:flex-row gap-6">
                <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    width={500}
                    height={600}
                    className="rounded-lg shadow-md"
                />

                <div>
                    <h1 className="text-3xl font-bold">{movie.title}</h1>
                    <p className="text-gray-500">
                        ⭐ {movie.vote_average.toFixed(1)} / 10 ({movie.vote_count} votes) •{" "}
                        {movie.release_date} • {movie.runtime} mins
                    </p>

                    <div className="flex gap-2 mt-2 flex-wrap">
                        {movie.genres.map((genre) => (
                            <span
                                key={genre.id}
                                className="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded-full"
                            >
                                {genre.name}
                            </span>
                        ))}
                    </div>

                    <h2 className="mt-4 font-semibold text-xl">Overview</h2>
                    <p className="text-gray-700 mt-2">{movie.overview}</p>

                    {/* Production Companies */}
                    <h3 className="mt-4 font-semibold">Production Companies</h3>
                    <div className="flex gap-6 flex-wrap mt-2">
                        {movie.production_companies.map((company) => (
                            <div key={company.id} className="flex flex-col items-center gap-2 w-24">
                                <div className="w-full h-16 flex items-center justify-center bg-gray-100 rounded">
                                    {company.logo_path ? (
                                        <Image
                                            src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                                            alt={company.name}
                                            width={80}
                                            height={50}
                                            className="object-contain"
                                        />
                                    ) : (
                                        <span className="text-xs text-gray-400">No Logo</span>
                                    )}
                                </div>
                                <span className="text-center text-sm">{company.name}</span>
                            </div>
                        ))}
                    </div>


                </div>
            </div>

            {/* Cast */}
            <h2 className="mt-8 text-2xl font-bold">Cast</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
                {movie.credits.cast.slice(0, 10).map((actor) => (
                    <PersonCard
                        key={actor.id}
                        name={actor.name}
                        role={actor.character}
                        profilePath={actor.profile_path}
                    />
                ))}
            </div>

            {/* Crew */}
            <h2 className="mt-8 text-2xl font-bold">Key Crew</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
                {movie.credits.crew
                    .filter((crew) =>
                        ["Director", "Producer", "Screenplay", "Novel"].includes(crew.job)
                    )
                    .slice(0, 10)
                    .map((crew) => (
                        <PersonCard
                            key={crew.id}
                            name={crew.name}
                            role={crew.job}
                            profilePath={crew.profile_path}
                        />
                    ))}
            </div>
        </div>
    );
}

