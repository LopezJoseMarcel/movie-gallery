// app/movie/[id]/page.tsx
import Image from "next/image";
import { fetchMovieDetails } from '@/utils/tmdbClient';

interface MoviePageProps {
    params: {
      id: string;
    };
  }
  
  export default async function MoviePage({ params }: MoviePageProps) {
    const { id } = await params; // Accedemos directamente al id

    const movie = await fetchMovieDetails(id);

    //console.log("Movie Details", movie);

    //onsole.log("movie: ", movie);
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={500}
        height={750}
        className="rounded-lg"
      />

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-400">
          <strong>Géneros:</strong>{" "}
          {
            movie.genres.map((genre : {name: string;}) => genre.name).join(", ")
          }
        </p>
        <p className="text-sm text-gray-400">
          <strong>Duración:</strong> {movie.runtime} minutos
        </p>
        <p className="text-sm text-gray-400">
          <strong>Presupuesto:</strong>{" "}
          {movie.budget > 0  ? 
            `$ ${movie.budget}`
            :
            "No disponible"
          }
        </p>
      </div>

      <p className="text-lg text-gray-500 mt-4">{movie.overview}</p>
      <p className="text-sm text-gray-400 mt-2">Lanzada el: {movie.release_date}</p>
      <p className="text-sm text-gray-400">Calificación: {movie.vote_average}</p>
    </div>
    );
  }
  