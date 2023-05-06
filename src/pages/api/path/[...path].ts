import type { NextApiRequest, NextApiResponse } from 'next'
import { handlePath } from '../raw'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { path } = req.query;
  const pathString = path ? (Array.isArray(path) ? path.join('/') : path) : '/';
  return handlePath(req, res, pathString);
}