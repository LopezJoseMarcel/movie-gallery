"use client";

import { useState, useEffect } from "react";

import { Movie } from "@/interfaces/Movie";
import SearchMovieForm from "@/components/containers/SearchMovieForm";
import useMovies from "@/hooks/useMovies";
import MovieGallery from "@/components/containers/MovieGallery";

export default function Home() {
  const [query, setQuery] = useState("");
  const [querySearch, setQuerySearch] = useState("");
  const {
    movies,
    loading,
    error,
    favoriteMovies,
    toWatchMovies,
    watched_movies,
  } = useMovies(querySearch);

  const [showFavorites, setShowFavorites] = useState(false);
  const [showToWatch, setShowToWatch] = useState(false);
  const [showWatched, setShowWatched] = useState(false);

  const handleSearch = () => {
    setQuerySearch(query);
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Encabezado */}
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-2">Movie Gallery</h1>
        <p className="text-lg text-gray-500">Discover your favorite movies.</p>
      </header>

      {/* Barra de Búsqueda */}

      <SearchMovieForm
        query={query}
        setQuery={setQuery}
        onSearch={handleSearch}
      />
      {loading && <p className="text-center">Cargando...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Sección de Películas */}
      {showFavorites && (
        <MovieGallery
          params={{
            movies: favoriteMovies.favorite_movies,
            title: "Favorites",
          }}
        />
      )}
      {showToWatch && (
        <MovieGallery
          params={{
            movies: toWatchMovies.to_watch_movies,
            title: "Movies to Watch",
          }}
        />
      )}
      {showWatched && (
        <MovieGallery
          params={{
            movies: watched_movies.watched_movies,
            title: "Watched Movies",
          }}
        />
      )}
      {!loading && !error && !showFavorites && !showToWatch && !showWatched && (
        <MovieGallery
          params={{
            movies: movies,
            title: "Popular Movies",
          }}
        />
      )}

      {/* Botones de Filtros */}
      {/* Footer */}
      <footer className="text-center text-sm text-gray-500">
        © 2024 Movie Gallery. All rights reserved.
      </footer>
    </div>
  );
}
