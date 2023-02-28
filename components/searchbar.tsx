import { SearchIcon } from "@chakra-ui/icons"
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { NextPage } from "next"
import { useForm } from "react-hook-form"

interface Props {
  onSubmit: (term: string) => void
}

const Searchbar: NextPage<Props> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const formSubmitted = (form: any) => {
    onSubmit(form.search)
  }

  return (
    <form onSubmit={handleSubmit(formSubmitted)}>
      <InputGroup>
        <Input {...register("search")} />
        <InputRightElement>
          <Button type="submit">
            <SearchIcon />
          </Button>
        </InputRightElement>
      </InputGroup>
    </form>
  )
}

export default Searchbar
