import NotFound from "@/components/notFound"
import { movie } from "@/lib/movie"
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

  return <>{film.title}</>
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { id } = ctx.query

  const film = await movie.get(Number.parseInt(id as string))
  return {
    props: {
      film: film,
    },
  }
}

export default MoviePage
