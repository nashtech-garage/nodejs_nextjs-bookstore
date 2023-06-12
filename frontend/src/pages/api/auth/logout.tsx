import type { NextApiRequest, NextApiResponse } from 'next/types'
import Cookies from 'cookies'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const cookies = new Cookies(req, res)
  cookies.set('access-token') // Remove access-token
  res.json({ message: 'Logout Successfully' })
}
