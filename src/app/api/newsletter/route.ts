import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body);
  const { email } = body;
  if (!email) {
    return NextResponse.json(
      { error: 'Email is required' },
      {
        status: 400,
      },
    );
  }
  const result = await fetch('https://api.sendinblue.com/v3/contacts', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      'api-key': process.env.SENDINBLUE_API_KEY!,
    },
    body: JSON.stringify({ updateEnabled: false, email: email, listIds: [5] }),
  });
  const data = await result.json();
  if (!result.ok) {
    return NextResponse.json(
      { error: data.error.email[0] },
      {
        status: 500,
      },
    );
  }
  return NextResponse.json({
    status: 201,
  });
}
