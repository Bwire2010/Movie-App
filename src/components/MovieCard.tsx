import { Movie } from "@/interfaces/movie";
import Image from "next/image";
import Link from "next/link";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="rounded-lg shadow-md bg-white hover:shadow-xl transition p-1">
      <Link href={`/movie/${movie.id}`}>
        <div className="relative w-full aspect-[2/3]"> 
          {/* Keeps consistent poster aspect ratio */}
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            fill
            className="rounded-lg object-cover"
            sizes="(max-width: 768px) 50vw, 20vw"
          />
        </div>
        <h2 className="mt-2 font-semibold text-lg truncate">{movie.title}</h2>
        <p className="text-sm text-gray-600">{movie.release_date}</p>
        <p className="text-yellow-600">⭐ {movie.vote_average.toFixed(1)}</p>
      </Link>
    </div>
  );
}

