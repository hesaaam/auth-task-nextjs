
import { z } from 'zod';

// Defines the validation rules for our authentication form.
export const authSchema = z.object({
  phone: z
    .string()
    .min(11, { message: "شماره موبایل باید ۱۱ رقم باشد." })
    .max(11, { message: "شماره موبایل باید ۱۱ رقم باشد." })
    .regex(/^09\d{9}$/, { message: "فرمت شماره موبایل صحیح نیست (مثال: 09123456789)." }),
});

// We can infer the TypeScript type directly from the schema.
// This ensures our form values always match our validation rules.
export type AuthFormValues = z.infer<typeof authSchema>;
