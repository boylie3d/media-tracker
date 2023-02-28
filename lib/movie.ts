import { Movie, PaginatedMovie } from "@/types/movie"
/** Server side only: logic for fetching info on movies */
export const movie = {
  find: async (searchTerms: string) => {
    const req = await fetch(
      `${process.env.TMDB_API}/search/movie?api_key=${process.env.MOVIEDB_API_KEY}&query=${searchTerms}`,
    )
    const resp = (await req.json()) as PaginatedMovie
    return resp
  },

  get: async (id: number) => {
    const req = await fetch(
      `${process.env.TMDB_API}/movie/${id}?api_key=${process.env.MOVIEDB_API_KEY}`,
    )
    const resp = (await req.json()) as Movie
    return resp
  },

  getImagePath: (url: string, size: number = 500) => {
    return `${process.env.NEXT_PUBLIC_TMDB_IMAGE_ROOT}/w${size}${url}`
  },
}
