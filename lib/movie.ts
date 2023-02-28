import { Error, Movie, PaginatedMovie } from "@/types/movie"

interface imageSizes {
  backdrop_sizes: "w300" | "w780" | "w1280" | "original"
  // logo_sizes: ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
  // poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
  // profile_sizes: ["w45", "w185", "h632", "original"],
  // still_sizes: ["w92", "w185", "w300", "original"],
}

export const findMovie = async (searchTerms: string) => {
  const req = await fetch(
    `${process.env.TMDB_API}/search/movie?api_key=${process.env.MOVIEDB_API_KEY}&query=${searchTerms}`,
  )
  const resp = (await req.json()) as PaginatedMovie
  return resp
}

export const getMovie = async (id: number) => {
  const req = await fetch(
    `${process.env.TMDB_API}/movie/${id}?api_key=${process.env.MOVIEDB_API_KEY}`,
  )
  if (!req.ok) {
    const err = (await req.json()) as Error
    return err
  }

  const resp = (await req.json()) as Movie
  return resp
}

export const getPoster = (
  url: string,
  size: "w92" | "w154" | "w185" | "w342" | "w500" | "w780" | "original" = "w92",
) => {
  return `${process.env.NEXT_PUBLIC_TMDB_IMAGE_ROOT}/${size}${url}`
}
