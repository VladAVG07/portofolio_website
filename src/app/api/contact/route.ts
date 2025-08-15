import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY;
const resend = new Resend(apiKey);

export async function POST(request: NextRequest) {
	try {
		// Here you would typically process the contact form data
		const body = await request.json();

		const { data, error } = await resend.emails.send({
			from: 'onboarding@resend.dev',
			to: 'vladgabrielapostol@gmail.com',
			subject: 'New Contact Message',
			replyTo: body.email,
			html: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
      body { margin:0; padding:0; font-family: Arial, sans-serif; background-color:#f5f7fb; }
      .container { max-width:600px; margin:20px auto; background:#ffffff; border-radius:8px; padding:20px; box-shadow:0 2px 6px rgba(0,0,0,0.1); }
      h2 { color:#0f172a; font-size:18px; margin-bottom:10px; }
      p { color:#334155; font-size:14px; line-height:1.6; }
      .detail { background:#f0f1f5; padding:10px; margin:5px 0; border-radius:6px; }
      a { color:#1d4ed8; text-decoration:none; }
      @media screen and (max-width: 480px) {
        .container { padding:15px; }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>New Contact Form Submitted</h2>
      <p>Hello Vlad,</p>
      <p>You received a new message from your portfolio contact form:</p>

      <div class="detail"><strong>Name:</strong> ${body.name}</div>
      <div class="detail"><strong>Subject:</strong> ${body.subject}</div>
      <div class="detail"><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></div>
      <div class="detail"><strong>Message:</strong><br>${body.message}</div>

      <p style="font-size:12px; color:#64748b; margin-top:15px;">This notification was sent from your portfolio site. Ignore if unexpected.</p>
    </div>
  </body>
</html>
`,
		});

		console.log(data);

		if (error) {
			return NextResponse.json(
				{ error: error.message || error },
				{ status: 500 }
			);
		}

		return NextResponse.json({
			message: 'Contact form submitted successfully',
			data: body,
		});
	} catch (error) {
		return NextResponse.json({ error: error }, { status: 400 });
	}
}
