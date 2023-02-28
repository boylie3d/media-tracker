import { movie } from "@/lib/movie"
import { Movie } from "@/types/movie"
import {
  Box,
  Heading,
  HStack,
  Image,
  LinkBox,
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
    <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
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
    </LinkBox>
  </>
)

export default MovieCard
