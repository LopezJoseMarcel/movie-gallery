import MovieCard from "./MovieCard";
import { Movie } from "@/interfaces/Movie";
import { BiSolidMoviePlay } from "react-icons/bi";

interface MovieGalleryProps {
  params: {
    movies: Movie[];
    title: string;
    enabled: boolean
  };
}

export default function MovieGallery({ params }: MovieGalleryProps) {
  return (
    <div className="flex flex-col  items-center gap-4">
      <section className="flex flex-row items-center gap-2 ">
        <h1 className="font-bold">{params.title}</h1>
        <BiSolidMoviePlay size={30}/>
      </section>
      <main className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {params.movies.map((movie: Movie) => (
          <MovieCard key={movie.id} params={movie} enabled={params.enabled} />
        ))}
      </main>
    </div>
  );
}
