"use client";

import { useState } from "react";


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
  } = useMovies(querySearch);


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
      
        <MovieGallery
          params={{
            movies: movies,
            title: "Popular Movies",
            enabled: true
          }}
        />
     

      {/* Botones de Filtros */}
      {/* Footer */}
      <footer className="text-center text-sm text-gray-500">
        © 2024 Movie Gallery. All rights reserved.
      </footer>
    </div>
  );
}
