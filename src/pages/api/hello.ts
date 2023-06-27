import { NOTION_TOKEN } from '@/config';
import { Client } from '@notionhq/client';
import { NextApiRequest, NextApiResponse } from 'next';

const notion = new Client({
  auth: NOTION_TOKEN,
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: 'JohnDoe' });
}
