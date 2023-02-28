import { movie } from "@/lib/movie"
import { Movie } from "@/types/movie"
import {
  Box,
  Heading,
  HStack,
  Image,
  LinkOverlay,
  Text,
  VStack,
} from "@chakra-ui/react"
import { NextPage } from "next"

interface Props {
  film: Movie
}

const MovieCard: NextPage<Props> = ({ film }) => (
  <>
    <LinkOverlay href={`/movies/${film.id}`}>
      <Box minW="300px">
        <HStack>
          <Image maxH="100px" src={movie.getImagePath(film.poster_path)} />
          <VStack align="left">
            <Heading as="h3" size="md" verticalAlign="top">
              {film.title} - {film.id}
            </Heading>
            <Text noOfLines={2}>{film.overview}</Text>
          </VStack>
        </HStack>
      </Box>
    </LinkOverlay>
  </>
)

export default MovieCard
