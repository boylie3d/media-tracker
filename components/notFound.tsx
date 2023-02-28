import { Center, Heading, Text, VStack } from "@chakra-ui/react"
import { NextPage } from "next"

interface Props {}

const NotFound: NextPage<Props> = ({}) => {
  return (
    <Center h="100%">
      <VStack>
        <Heading>{"¯\\_(ツ)_/¯"} </Heading>
        <Text>{"Can't find the film you're looking for!"}</Text>
      </VStack>
    </Center>
  )
}

export default NotFound
