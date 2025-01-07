"use client";

import MovieGallery from "@/components/containers/MovieGallery";
import { useEffect, useState } from "react";
import useMovies from "@/hooks/useMovies";
import { Movie } from "@/interfaces/Movie";
import { useParams } from "next/navigation"; // Importamos useParams

interface MoviesList {
  list: Movie[];
  title: string;
}

export default function FavoritePage() {
  const params = useParams(); // Usamos el hook para obtener parámetros dinámicos
  const list_name = params.list_name as "favorites" | "to_watch" | "watched"; // Tipado seguro

  const [moviesList, setMovies] = useState<MoviesList | null>(null);
  const { favoriteMovies, toWatchMovies, watched_movies } = useMovies("");

  useEffect(() => {
    if (!favoriteMovies || !toWatchMovies || !watched_movies) return;

    switch (list_name) {
      case "favorites":
        setMovies({
          list: favoriteMovies.favorite_movies || [],
          title: "Favorite Movies",
        });
        break;
      case "to_watch":
        setMovies({
          list: toWatchMovies.to_watch_movies || [],
          title: "Movies to Watch",
        });
        break;
      case "watched":
        setMovies({
          list: watched_movies.watched_movies || [],
          title: "Watched Movies",
        });
        break;
      default:
        console.log("Parámetro desconocido:", list_name);
        break;
    }
  }, [list_name, favoriteMovies, toWatchMovies, watched_movies]); // Dependencias

  return (
    <>
      {moviesList ? (
        <MovieGallery
          params={{
            movies: moviesList.list,
            title: moviesList.title,
          }}
        />
      ) : (
        <h1 className="text-4xl font-bold mb-2">Sorry, empty list !!</h1>
      )}
    </>
  );
}
