import { Movie, PaginatedMovie } from "@/types/movie"
import useSWR from "swr"

const fetcher = (url: URL) => fetch(url).then(res => res.json())

export function useMovieSearch(term: string) {
  const { data, error } = useSWR(`/api/movies/search?term=${term}`, fetcher)

  return {
    data: data as PaginatedMovie,
    loading: !error && !data,
    error: error,
  }
}

export function UseMovie(id: number) {
  const { data, error } = useSWR(`/api/movies/${id}`)

  return {
    data: data as Movie,
    loading: !error && !data,
    error: error,
  }
}
