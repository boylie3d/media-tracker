import { getMovie } from "@/lib/movie"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query
  const film = await getMovie(Number.parseInt(id as string))
  res.status(200).json(film)
}
