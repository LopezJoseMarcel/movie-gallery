"use client";
import React, { useEffect, useState } from "react";
import { Movie } from "@/interfaces/Movie";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import useLocalStorage from "@/hooks/useLocalStorage";
import { FaEye } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";

interface movieCardProps {
  params: Movie;
  enabled: boolean;
}

export default function MovieCard({ params, enabled }: movieCardProps) {
  const [watched_movies, setWatched_movies] = useLocalStorage(
    "watched_movies",
    { watched_movies: [{ id: 0, title: "", poster_path: "" }] }
  );

  const [isWatched, setIsWatched] = useState<boolean | null>(null);

  const [isFavorite, setFavorite] = useState<boolean | null>(null);
  const [favoriteMovies, setFavoriteMovies] = useLocalStorage(
    "FavoriteMovies",
    { favorite_movies: [{ id: 0, title: "", poster_path: "" }] }
  );

  const [toWatchMovies, setToWatchMovies] = useLocalStorage("ToWatchMovies", {
    to_watch_movies: [{ id: 0, title: "", poster_path: "" }],
  });
  const [isToWatch, setIsToWatch] = useState<boolean | null>(null);

  //favorite movies

  if (isFavorite === null) {
    setFavorite(
      favoriteMovies.favorite_movies.some((movie) => movie.id === params.id)
    );
  }
  const handleClickFavorite = () => {
    const newFavoriteMovies = {
      favorite_movies: favoriteMovies.favorite_movies.some(
        (movie) => movie.id === params.id
      )
        ? favoriteMovies.favorite_movies.filter(
            (movie) => movie.id !== params.id
          )
        : [
            ...favoriteMovies.favorite_movies,
            {
              id: params.id,
              title: params.title,
              poster_path: params.poster_path,
            },
          ],
    };
    setFavoriteMovies(newFavoriteMovies);
    setFavorite(!isFavorite); // Update isFavorite based on click
  };
  //end favorite movies

  //to watch movies

  if (isToWatch === null) {
    setIsToWatch(
      toWatchMovies.to_watch_movies.some((movie) => movie.id === params.id)
    );
  }

  const handleClickToWatch = () => {
    const newToWatchMovies = {
      to_watch_movies: toWatchMovies.to_watch_movies.some(
        (movie) => movie.id === params.id
      )
        ? toWatchMovies.to_watch_movies.filter(
            (movie) => movie.id !== params.id
          )
        : [
            ...toWatchMovies.to_watch_movies,
            {
              id: params.id,
              title: params.title,
              poster_path: params.poster_path,
            },
          ],
    };
    setToWatchMovies(newToWatchMovies);
    setIsToWatch(!isToWatch); // Update isFavorite based on click
  };
  //end to watch movies

  //watched movies

  if (isWatched === null) {
    setIsWatched(
      watched_movies.watched_movies.some((movie) => movie.id === params.id)
    );
  }

  const handleClickWatched_movies = () => {
    const newWatchedMovies = {
      watched_movies: watched_movies.watched_movies.some(
        (movie) => movie.id === params.id
      )
        ? watched_movies.watched_movies.filter(
            (movie) => movie.id !== params.id
          )
        : [
            ...watched_movies.watched_movies,
            {
              id: params.id,
              title: params.title,
              poster_path: params.poster_path,
            },
          ],
    };
    setWatched_movies(newWatchedMovies);
    setIsWatched(!isWatched); // Update isFavorite based on click
  };
  //end watched movies

  const [showOption, setShowOption] = useState<boolean>(false);

  useEffect(() => {
    setFavorite(
      favoriteMovies.favorite_movies.some((movie) => movie.id === params.id)
    );
  }, [favoriteMovies, params.id]);

  return (
    <div
      key={params.id}
      className="bg-white rounded-lg shadow-lg overflow-hidden relative"
    >
      {enabled && (
        <FaHeart
          color={isFavorite ? "orange" : "white"}
          className="absolute top-2 right-2 w-6 h-6 hover:animate-bounce "
          onClick={handleClickFavorite}
          title="Add to favorites"
        />
      )}
      {enabled && (
        <section
          id="option-add"
          className="absolute top-2 left-2 flex  flex-col items-start gap-4  "
        >
          {!showOption && (
            <FaCirclePlus
              color="white"
              className="w-6 h-6 hover:rotate-90 transition-all duration-200s"
              title="Add to list"
              onClick={() => setShowOption(!showOption)}
            />
          )}
          {showOption && (
            <FaCircleMinus
              color="white"
              className="w-6 h-6 "
              title="Add to list"
              onClick={() => setShowOption(!showOption)}
            />
          )}

          {showOption && (
            <div id="options" className="flex flex-col items-start gap-4">
            <div className="flex items-center bg-orange-600	p-1 rounded-md ml-0">
              <FaBookmark 
                color={isToWatch ? "#FFEB00" : "white"} 
                onClick={handleClickToWatch} 
              />
              <span className="text-xs ml-1">Add Watch List</span> 
            </div>
            <div className="flex items-start bg-orange-600	p-1 rounded-md ml-0	">
              <FaEye 
                color={isWatched ? "#FFEB00" : "white"} 
                onClick={handleClickWatched_movies} 
              />
              <span className="text-xs ml-1">Add Watched List</span> 
            </div>
          </div>
          )}
        </section>
      )}

      <Image
        src={`https://image.tmdb.org/t/p/w500${params.poster_path}`}
        alt={params.title}
        width={500}
        height={750}
        className="w-full"
      />
      <Link href={`/movie/${params.id}`} className="p-4 text-center">
        <h3 className="text-lg font-semibold text-orange-500 underline">
          {params.title}
        </h3>
      </Link>
    </div>
  );
}
