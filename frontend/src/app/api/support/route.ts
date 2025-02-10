import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from "next/server";
import {client} from "../../../../sanityClient"


// Email transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || "465"),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// API route function
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, issue } = body;
    if (!name || !email || !phone || !issue) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    // Save to Sanity
    const sanityResponse = await client.create({
      _type: "supportRequest",
      name,
      email,
      phone,
      issue,
      createdAt: new Date().toISOString(),
    });

    console.log("Saved in Sanity:", sanityResponse);

    // Email to website owner (YOU)
    const ownerMailOptions = {
      from: `"Swiftly Support" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "New Support Request - Swiftly Grocery",
      html: `
        <h2>New Support Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Issue:</strong> ${issue}</p>
        <hr />
        <p>This request was submitted via the Swiftly Support Page.</p>
      `,
    };

    // Confirmation email to the user
    const userMailOptions = {
      from: `"Swiftly Support" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Support Request Received - Swiftly Grocery",
      html: `
        <h2>Hello ${name},</h2>
        <p>Thank you for reaching out to Swiftly Support. We have received your request and will get back to you shortly.</p>
        <p><strong>Your Submitted Issue:</strong></p>
        <blockquote style="background: #f9f9f9; padding: 10px; border-left: 3px solid #007bff;">${issue}</blockquote>
        <p>If you need urgent assistance, please contact us at:</p>
        <ul>
          <li>Email: <a href="mailto:${process.env.EMAIL_USER}">${process.env.EMAIL_USER}</a></li>
          <li>Phone: +92 300 1234567</li>
        </ul>
        <hr />
        <p>Best Regards, <br> Swiftly Support Team</p>
      `,
    };

    // Send emails
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ message: "Support request received! A confirmation email has been sent to you." }, { status: 200 });

  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Something went wrong. Please try again." }, { status: 500 });
  }
}
