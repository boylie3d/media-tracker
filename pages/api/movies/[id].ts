import { movie } from "@/lib/movie"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query
  const film = await movie.get(Number.parseInt(id as string))
  res.status(200).json(film)
}
