"use client"
import Image from "next/image";
import { fetchMovieDetails } from '@/utils/tmdbClient';
import { useParams } from "next/navigation"; // Importamos useParams
import { useEffect, useState } from "react";
import { Movie } from "@/interfaces/Movie";

/*
interface MoviePageProps {
    params: {
      id: string;
    };
  }*/
    
    interface MovieData extends Movie {
      genres: { "id": number,"name": string}[];
      runtime: number;
      budget: number;
      overview: string; 
      release_date:string;
      vote_average: number;
    }
  
  export default  function MoviePage() {//{ params }: MoviePageProps
    const params = useParams(); // Usamos el hook para obtener parámetros dinámicos
    const id = params.id as string;
    const [movie, setMovie] = useState<MovieData | null>(null);

    //const movie = await fetchMovieDetails(id);

    useEffect((() => {
      const movieData = async () => {
        const data = await fetchMovieDetails(id);
        setMovie(data);
      }
      movieData();
    }),[id])
  
    return (
      
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
      {movie && (
        <>
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
              <strong>Genre:</strong>{" "}
              {
                movie.genres.map((genre : {name: string;}) => genre.name).join(", ")
              }
            </p>
            <p className="text-sm text-gray-400">
              <strong>Running time:</strong> {movie.runtime} minutos
            </p>
            <p className="text-sm text-gray-400">
              <strong>Budget:</strong>{" "}
              {movie.budget > 0  ? 
                `$ ${movie.budget}`
                :
                "No disponible"
              }
            </p>
            
          </div>

          <p className="text-lg text-gray-500 mt-4">{movie.overview}</p>
          <p className="text-sm text-gray-400 mt-2">Released: {movie.release_date}</p>
          <p className="text-sm text-gray-400">Rating: {movie.vote_average}</p>
        </>
      )}
    </div>
    );
  }
  