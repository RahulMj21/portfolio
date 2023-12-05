import { z } from "zod";

export const SendMailSchema = z.object({
    name: z
        .string()
        .trim()
        .min(1, "This is a required field.")
        .max(40, "Name must contain less that 40 characters."),
    email: z.string().trim().email().min(1, "This is a required field."),
    subject: z
        .string()
        .trim()
        .min(1, "This is a required field.")
        .max(40, "Subject must contain less that 40 characters."),
    message: z
        .string()
        .trim()
        .min(1, "This is a required field.")
        .max(400, "Message must contain less that 400 characters"),
});

export type TSendMailInput = z.infer<typeof SendMailSchema>;
