import { SendMailSchema } from "@/schemas";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const parse = SendMailSchema.safeParse(body);
        if (!parse.success) {
            return NextResponse.json(
                { status: "FAIL", message: "bad request", error: parse.error },
                { status: 400 }
            );
        }
        const { name, email, subject, message } = body;

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.SMPT_USER,
                pass: process.env.SMPT_PASSWORD,
            },
        });

        const emailRes = await transporter.sendMail({
            from: email,
            to: process.env.SMTP_RECIPIENT,
            subject,
            html: `<p>You have a new contact form submission from ${req.referrer} site</p><br>
            <P><strong>Name:</strong> ${name}</p><br>
            <P><strong>email:</strong> ${email}</p><br>
            <P><strong>Subject:</strong> ${subject}</p><br>
            <P><strong>Message:</strong> ${message}</p>`,
        });
        console.log("emailRes:", emailRes);
        return NextResponse.json({
            status: "OK",
            message: "email sent successfully",
        });
    } catch (error) {
        return NextResponse.json(
            { status: "FAIL", message: "something went wrong" },
            { status: 500 }
        );
    }
}
