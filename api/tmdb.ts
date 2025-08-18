import { IMovie, IMovieDetails } from "@/types/movie";

const TMDB_BASE_URL: string = "https://api.themoviedb.org/3";
const AUTH_HEADERS: Record<string, string> = {
  Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN!}`,
  "Content-Type": "application/json",
};

export const fetchMovies = async ({
  query,
}: {
  query: string;
}): Promise<IMovie[]> => {
  const endpoint = query
    ? `${TMDB_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_BASE_URL}/discover/movie`;

  const response = await fetch(endpoint, {
    method: "GET",
    headers: AUTH_HEADERS,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch movies: ${response.statusText}`);
  }

  const data = await response.json();
  return data.results;
};

export const fetchMovieDetails = async (
  movieId: string
): Promise<IMovieDetails> => {
  try {
    const response = await fetch(`${TMDB_BASE_URL}/movie/${movieId}`, {
      method: "GET",
      headers: AUTH_HEADERS,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch movie details: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};
