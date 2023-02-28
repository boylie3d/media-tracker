import MovieCard from "@/components/movies/movieCard"
import Searchbar from "@/components/searchbar"
import { PaginatedMovie } from "@/types/movie"
import { Stack } from "@chakra-ui/react"
import { NextPage } from "next"
import { useState } from "react"

interface Props {}

const Movies: NextPage<Props> = ({}) => {
  const [movies, setMovies] = useState<PaginatedMovie>()

  const search = (term: string) => {
    fetch(`/api/movies/search?term=${term}`).then(resp =>
      resp.json().then(json => setMovies(json)),
    )
  }

  return (
    <>
      <Searchbar onSubmit={search} />
      <Stack direction={["column", "row"]}>
        {movies &&
          movies.results.map(film => <MovieCard key={film.id} film={film} />)}
      </Stack>
    </>
  )
}

export default Movies
