import { movie } from "@/lib/movie"
import { Movie } from "@/types/movie"
import { GetServerSideProps, NextPage } from "next"

interface Props {
  film: Movie
}

const MoviePage: NextPage<Props> = ({ film }) => {
  if (!film) return <div>shrug</div>

  return <div>{film.title}</div>
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
