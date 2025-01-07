
import MovieCard from "./MovieCard";
import { Movie } from "@/interfaces/Movie";

interface MovieGalleryProps {
  params:{
   movies:  Movie[];
   title: string;
  } 
}


export default function InputSearch({ params }: MovieGalleryProps) {
  return (
    <div className="flex flex-col  items-center gap-4">
    
    <h1 className="font-bold">{params.title}</h1>
      <main className="grid grid-cols-2 md:grid-cols-4 gap-8">
        { params.movies.map((movie: Movie) => (
          <MovieCard key={movie.id} params={movie} />
        ))}
      </main>
    </div>
  );
}
