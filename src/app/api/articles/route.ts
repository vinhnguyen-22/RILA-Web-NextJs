import { serverSideCmsClient } from '@/services/cms/cms.client';
import { isArticle } from '@/types/guards';
import { NextResponse } from 'next/server';
// export const dynamic = 'force-dynamic';
export async function GET() {
  try {
    const articles = await serverSideCmsClient.getDatabaseEntries(
      process.env.NOTION_BLOG_DB_ID,
      isArticle,
    );
    return NextResponse.json({ articles });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : 'Unknown error' },
      { status: 500 },
    );
  }
}
