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
  const addContact = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      'api-key': process.env.BREVO_API_KEY!,
    },
    body: JSON.stringify({
      email: email,
    }),
  });

  const data = await addContact.json();
  console.log(data);
  if (data.message === 'Contact already exist') {
    return NextResponse.json({
      status: 201,
    });
  }
  if (!addContact.ok) {
    return NextResponse.json(
      { error: data.error.email[0] },
      {
        status: 500,
      },
    );
  }
  return NextResponse.json({
    status: 200,
  });
}
