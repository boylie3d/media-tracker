import NotFound from "@/components/notFound"
import { getBackdropImage, getMovie } from "@/lib/movie"
import { Movie } from "@/types/movie"
import { Box } from "@chakra-ui/react"
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

  console.log(JSON.stringify(film))
  return (
    <>
      <Box
        backgroundSize="cover"
        minH="100vh"
        bgImage={`linear-gradient(rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 1)), 
          url(${getBackdropImage(film.backdrop_path)})`}
      >
        {film.title}
        <br />
        {film.tagline}
      </Box>
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
