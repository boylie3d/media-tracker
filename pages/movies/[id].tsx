import NotFound from "@/components/notFound"
import { getMovie, getPoster } from "@/lib/movie"
import { Movie } from "@/types/movie"
import { Box, Image } from "@chakra-ui/react"
import { GetServerSideProps, NextPage } from "next"

interface Props {
  film: Movie
}

const MoviePage: NextPage<Props> = ({ film }) => {
  if (!film.id)
    return (
      <Box h="100vh">
        <NotFound />
      </Box>
    )

  return (
    <>
      <Image src={getPoster(film.backdrop_path)} />
      {film.title}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { id } = ctx.query

  const film = await getMovie(Number.parseInt(id as string))
  return {
    props: {
      film: film,
    },
  }
}

export default MoviePage
