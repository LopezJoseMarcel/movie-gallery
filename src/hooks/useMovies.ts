import {useState, useEffect} from "react";
import { fetchPopularMovies } from "@/utils/tmdbClient";
import { Movie } from "@/interfaces/Movie";
import useLocalStorage from "./useLocalStorage";

 const useMovies = (query: string = "") => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

     const [watched_movies] = useLocalStorage(
        "watched_movies",
        { watched_movies: [{ id: 0, title: "", poster_path: "" }] }
      );
      const [favoriteMovies] = useLocalStorage(
        "FavoriteMovies",
        { favorite_movies: [{ id: 0, title: "", poster_path: "" }] }
      );
      const [toWatchMovies] = useLocalStorage("ToWatchMovies", {
        to_watch_movies: [{ id: 0, title: "", poster_path: "" }],
      });
    

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            setError(null);
            try {
              const data = await fetchPopularMovies(query);
              setMovies(data.results);
            } catch (error) {
              setError("Error fetching popular movies: " + error);
            } finally {
                setLoading(false);
            }
        }

        fetchMovies();

    }, [query])

    return { movies, loading, error, watched_movies, favoriteMovies,toWatchMovies};
}

export default useMovies;


