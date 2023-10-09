import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body);
  const { email, name, company, newsletter, report } = body;
  if (!email) {
    return NextResponse.json(
      { error: 'Email is required' },
      {
        status: 400,
      },
    );
  }
  const sendReport = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      'api-key': process.env.BREVO_API_KEY!,
    },
    body: JSON.stringify({
      sender: {
        name: 'Duyen Le from RILA',
        email: 'duyenle.vacl@gmail.com',
      },
      to: [
        {
          email: email,
          name: name,
        },
      ],
      templateId: 1,
      params: {
        "report_link": report
      }
      //   subject: 'Hello world',
      //   htmlContent:
      //     '<html><head></head><body><p>Hello,</p>This is my first transactional email sent from Brevo.</p></body></html>',
    }),
  });
  const dataSendReport = await sendReport.json();
  console.log(dataSendReport);
  if (!sendReport.ok) {
    return NextResponse.json(
      { error: dataSendReport.error.email[0] },
      {
        status: 500,
      },
    );
  }

  if (newsletter) { // if user subscribes to newsletter, save to contact list
    const addContact = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        attributes: {
          NAME: name,
          COMPANY: company,
        },
        updateEnabled: false,
        email: email,
      }),
    });

    const resultAddContact = await addContact.json();
    console.log(resultAddContact);
    if (resultAddContact.message === 'Contact already exist') {
      return NextResponse.json({
        status: 201,
      });
    }
    if (!addContact.ok) {
      return NextResponse.json(
        { error: resultAddContact.error.email[0] },
        {
          status: 500,
        },
      );
    }
  }
  return NextResponse.json({
    status: 201,
  });
}
