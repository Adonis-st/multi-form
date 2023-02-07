import { Button } from "@/components/ui";
import { useFormStore } from "@/store";
import { useId } from "react";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";

export const PaymentForm = () => {
	const { currentStep, nextStep, previousStep } = useFormStore();
	const stepOneFormId = "form-" + useId();
	const stepTwoFormId = "form-" + useId();

	const formIds = [stepOneFormId, stepTwoFormId];

	const handleNextStep = () => {
		nextStep();
	};

	return (
		<div>
			<div className="flex justify-center">
				{formIds.map((form, index) => {
					return (
						<div
							key={index}
							className={`${
								currentStep === index + 1
									? "text-[#022959] bg-[#BEE2FD] border-[#BEE2FD]"
									: " border-black"
							} mr-2 last:mr-0 rounded-full w-6 h-6 text-center border text-sm `}>
							{index + 1}
						</div>
					);
				})}
			</div>

			<div>
				{currentStep === 1 && <StepOne formId={stepOneFormId} nextFormId={stepTwoFormId} />}
				{currentStep === 2 && <StepTwo />}
			</div>

			<div className="flex  justify-end">
				<Button
					// disabled={currentStep === 1 || currentStep === 5}
					onClick={() => previousStep()}>
					Go Back
				</Button>
				<Button
					// disabled={currentStep === 5}
					type="submit"
					form={formIds[currentStep - 1]}
					// onClick={() => handleNextStep()}
				>
					Next Setp
				</Button>
			</div>
		</div>
	);
};
