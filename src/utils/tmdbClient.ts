const BASE_URL = process.env.TMDB_BASE_URL;
const API_KEY = process.env.TMDB_API_KEY;

export async function fetchPopularMovies() {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

    if (!response.ok) {
        throw new Error('Error fetching popular movies');
    }

    return response.json();
}

export async function fetchMovieDetails(id: string) {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);

    if (!response.ok){
        throw new Error(`Error fetching details for movie ${id}`)
    }

    return response.json();
}