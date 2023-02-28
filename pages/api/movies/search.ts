import { findMovie } from "@/lib/movie"
import { PaginatedMovie } from "@/types/movie"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PaginatedMovie>,
) {
  const { term } = req.query
  const resultList = await findMovie(term as string)
  res.status(200).json(resultList)
}
