import { NextResponse } from 'next/server';
import { serverSideCmsClient } from '@/services/cms/cms.client';
import { isArticle } from '@/types/guards';
export const config = {
  api: {
      bodyParser: {
          sizeLimit: '4mb' // Set desired value here
      }
  }
}
export async function GET() {
  try {
    const articles = await serverSideCmsClient.getDatabaseEntries(process.env.NOTION_BLOG_DB_ID, isArticle);
    return NextResponse.json({ articles });
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Unknown error' }, { status: 500 });
  }
}
