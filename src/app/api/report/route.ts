import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body);
  const { email, name, company, newsletter, report_link, report_name } = body;
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
      replyTo: {
        email: process.env.BREVO_SENDER_EMAIL,
      },
      to: [
        {
          email: email,
          name: name,
        },
      ],
      templateId: parseInt(process.env.BREVO_REPORT_TEMPLATE_ID || ""),
      params: {
        FIRST_NAME: name,
        REPORT_LINK: report_link,
        REPORT_NAME: report_name,
      },
    }),
  });
  const dataSendReport = await sendReport.json();
  console.log(dataSendReport);
  if (!sendReport.ok) {
    return NextResponse.json(
      { error: dataSendReport.message },
      {
        status: 500,
      },
    );
  }

  if (newsletter) {
    // if user subscribes to newsletter, save to contact list
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
    status: 200,
  });
}
