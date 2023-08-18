// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../prisma/db';

type Data = {
  id: string;
  title: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = req.body;
  const { id, complete } = body;
  await prisma.todo.update({ where: { id }, data: { complete } });
  res.status(200).json(body);
}
