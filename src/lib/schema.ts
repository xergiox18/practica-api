import { z } from "zod";

export const FormSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "This field is required" })
    .regex(/^[^\d]*$/, { message: "Numbers are not allowed in this field" })
    .min(3, { message: "You cannot enter less than 3 characters" })
    .max(20, { message: "You cannot enter more than 20 characters" }),
  lastName: z
    .string()
    .regex(/^[^\d]*$/, { message: "Numbers are not allowed in this field" })
    .nonempty({ message: "This field is required" })
    .min(3, { message: "You cannot enter less than 3 characters" })
    .max(20, { message: "You cannot enter more than 20 characters" }),
  number: z
    .string()
    .regex(/^\d+$/, { message: "Only numbers allowed" })
    .nonempty({ message: "This field is required" })
    .min(1, { message: "Number is required" }),
  image: z
    .instanceof(File)
    .refine((file) => file.size > 0, {
      message: "Image is required",
    })
    .refine(
      (file) =>
        ["image/jpeg", "image/png", "image/webp", "image/gif"].includes(
          file.type
        ),
      {
        message: "Only image files allowed (jpg, png, webp, gif)",
      }
    ),
  date: z
    .string()
    .nonempty({ message: "Date is required" })
    .regex(/^\d{2}\/\d{2}\/\d{4}$/, {
      message: "Invalid date format (dd/mm/yyyy)",
    }),
});

export type FormSchemaType = z.infer<typeof FormSchema>;
