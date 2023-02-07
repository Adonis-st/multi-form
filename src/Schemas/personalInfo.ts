import { z } from "zod";

const requiredMessage = "This field is required";

export const personalFormSchema = z.object({
	name: z.string().min(1, requiredMessage),
	email: z.string().min(1, requiredMessage).email().min(2, "Email to short"),
	phoneNumber: z.string().min(1, requiredMessage).min(10, "Phone Number to short"),
});
export type PersonalFormInput = z.infer<typeof personalFormSchema>;
