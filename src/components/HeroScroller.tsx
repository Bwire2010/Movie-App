"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";
import { Movie } from "@/interfaces/movie";

import { Star } from "lucide-react"; // for ratings icon

interface HeroScrollerProps {
  movies: Movie[];
}

export default function HeroScroller({ movies }: HeroScrollerProps) {
  return (
    <div className="w-full h-[70vh] relative mb-6">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        slidesPerView={1}
        className="h-full"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute bottom-10 left-10 max-w-2xl text-white"
              >
                <h2 className="text-4xl font-bold mb-3">{movie.title}</h2>
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400" />
                    {movie.vote_average.toFixed(1)}
                  </span>
                  <span className="px-2 py-1 bg-green-600 rounded text-sm font-semibold">
                    HD
                  </span>
                </div>
                <p className="text-sm text-gray-200 line-clamp-3">
                  {movie.overview}
                </p>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
