import Image from "next/image";
//import { movies } from "@/data/movies";
import Link from "next/link";//link usuar para navegar entre paginas
import { fetchPopularMovies } from '@/utils/tmdbClient';

export default async function Home() {
  const movies = await fetchPopularMovies();

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Encabezado */}
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-2">Movie Gallery</h1>
        <p className="text-lg text-gray-500">
          Explora y encuentra tus películas favoritas.
        </p>
      </header>

      {/* Sección de Películas */}
      <main className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {movies.results.map((movie: { id: number; title: string; poster_path: string }) => (
          
            <div
              key={movie.id}
              className="bg-gray-200 rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={500}
                height={750}
                className="w-full"
              />
              <Link
                href={`/movie/${movie.id}`}
                key={movie.id}
                className="bg-gray-200 w-48 h-72 rounded-lg shadow-lg overflow-hidden"
              >

               <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-orange-500 ">{movie.title}</h3>
              </div> 
              </Link>
            </div>
          
        ))}
      </main>
      {/* Footer */}
      <footer className="text-center text-sm text-gray-500">
        © 2024 Movie Gallery. Todos los derechos reservados.
      </footer>
    </div>
  );
}
