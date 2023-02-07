import { PersonalFormInput } from "@/Schemas/personalInfo";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface FormState {
	currentStep: number;
	formId: {
		current: string;
		previous: string;
	};
	personalInfo: {
		name: string;
		email: string;
		phoneNumber: string;
	};

	getPersonalInfo: (by: PersonalFormInput) => void;
	// nextForm: (by: string) => void;
	nextStep: () => void;
	previousStep: () => void;
}

export const useFormStore = create<FormState>()(
	devtools(
		persist(
			(set) => ({
				currentStep: 1,
				formId: {
					current: "",
					previous: "",
				},
				personalInfo: {
					name: "",
					email: "",
					phoneNumber: "",
				},

				getPersonalInfo: (by: PersonalFormInput) =>
					set((state) => ({ personalInfo: (state.personalInfo = by) })),

				setForms: ({ previous, current }: { previous: string; current: string }) => {
					const forms = { previous, current };
					set((state) => ({ formId: (state.formId = forms) }));
				},
				nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
				previousStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
			}),
			{
				name: "steps-storage",
			}
		)
	)
);
