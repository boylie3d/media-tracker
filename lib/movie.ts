import { Error, MoviePartial, PaginatedMovie } from "@/types/movie"

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

  const resp = (await req.json()) as MoviePartial
  return resp
}

export const getPosterImage = (
  url: string,
  size:
    | "w92"
    | "w154"
    | "w185"
    | "w342"
    | "w500"
    | "w780"
    | "original" = "original",
) => {
  return formatImgInternal(size, url)
}

export const getBackdropImage = (
  url: string,
  size: "w300" | "w780" | "w1280" | "original" = "original",
) => {
  return formatImgInternal(size, url)
}

export const getLogoImage = (
  url: string,
  size:
    | "w45"
    | "w92"
    | "w154"
    | "w185"
    | "w300"
    | "w500"
    | "original" = "original",
) => {
  return formatImgInternal(size, url)
}

export const getProfileImage = (
  url: string,
  size: "w45" | "w185" | "h632" | "original" = "original",
) => {
  return formatImgInternal(size, url)
}

export const getStillImage = (
  url: string,
  size: "w92" | "w185" | "w300" | "original" = "original",
) => {
  return formatImgInternal(size, url)
}

const formatImgInternal = (size: string, url: string) => {
  return `${process.env.NEXT_PUBLIC_TMDB_IMAGE_ROOT}/${size}${url}`
}
