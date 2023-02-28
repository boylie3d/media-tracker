declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TMDB_API: string
      MOVIEDB_READ_ACCESS_TOKEN: string
      MOVIEDB_API_KEY: string
      NEXT_PUBLIC_TMDB_IMAGE_ROOT: string
    }
  }
}

export {}
