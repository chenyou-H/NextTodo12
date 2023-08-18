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
  await prisma.todo.create({
    data: { title: body.title, complete: false },
  });
  res.status(200).json(body);
}
