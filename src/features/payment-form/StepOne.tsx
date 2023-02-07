import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PersonalFormInput, personalFormSchema } from "@/Schemas/personalInfo";
import { TextInput } from "@/components/ui";
import { useFormStore } from "@/store";

interface Props {
	formId: string;
	nextFormId: string;
}

export const StepOne = ({ formId, nextFormId }: Props) => {
	const { currentStep, nextStep, personalInfo, getPersonalInfo } = useFormStore();
	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm<PersonalFormInput>({
		defaultValues: personalInfo,
		resolver: zodResolver(personalFormSchema),
	});

	const onSubmit = () => {
		getPersonalInfo(getValues());
		nextStep();
	};

	return (
		<div>
			<h2>Personal Info</h2>
			<p>Please provide your name, email, address and phone number</p>
			<form onSubmit={handleSubmit(onSubmit)} id={formId} className="flex flex-col w-full">
				<TextInput
					type="text"
					register={register}
					name="name"
					label="Name"
					errorMessage={errors.name?.message}
				/>

				<TextInput
					type="email"
					register={register}
					name="email"
					label="Email Address"
					errorMessage={errors.email?.message}
				/>

				<TextInput
					type="text"
					register={register}
					name="phoneNumber"
					label="Phone Number"
					errorMessage={errors.phoneNumber?.message}
				/>
			</form>
		</div>
	);
};
