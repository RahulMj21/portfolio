import { SendMailSchema } from "@/schemas";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const parse = SendMailSchema.safeParse(body);
        if (!parse.success) {
            return NextResponse.json(
                { status: "FAIL", message: "bad request", error: parse.error },
                { status: 400 }
            );
        } else {
            const { name, email, subject, message } = parse.data;
            const data = await resend.emails.send({
                from: "RahulMj21 <portfolio@rahulmj21.com>",
                to: [process.env.EMAIL_RECIPIENT as string],
                subject,
                html: `<p>You have a new contact form submission from site</p><br>
                     <P><strong>Name:</strong> ${name}</p><br>
                     <P><strong>email:</strong> ${email}</p><br>
                     <P><strong>Subject:</strong> ${subject}</p><br>
                     <P><strong>Message:</strong> ${message}</p>`,
            });
            if (!data.error) {
                return NextResponse.json({
                    status: "OK",
                    message: "email sent successfully",
                });
            } else {
                return NextResponse.json(
                    { status: "FAIL", message: "something went wrong" },
                    { status: 500 }
                );
            }
        }
    } catch (error) {
        return NextResponse.json(
            { status: "FAIL", message: "something went wrong" },
            { status: 500 }
        );
    }
}
