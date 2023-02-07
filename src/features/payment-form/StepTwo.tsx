import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PersonalFormInput, personalFormSchema } from "@/Schemas/personalInfo";
import { Form, TextInput } from "@/components/ui";

export const StepTwo = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<PersonalFormInput>({
		resolver: zodResolver(personalFormSchema),
	});

	const test = () => {
		console.log("success");
	};

	return (
		<div>
			<h2>Select your plan</h2>
		</div>
	);
};
