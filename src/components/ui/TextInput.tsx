import { cva, VariantProps } from "cva";
import { ComponentProps } from "react";

const inputStyles = cva("rounded-md border p-2 text-[#022959] focus:outline-none", {
	variants: {
		intent: {
			primary: "border-[#D6D9E6]",
		},
	},
	// compoundVariants: [
	// 	{
	// 		intent: "primary",
	// 		className: "border-red-500",
	// 	},
	// ],
	defaultVariants: {
		intent: "primary",
	},
});

type Props = VariantProps<typeof inputStyles> & ComponentProps<"input">;

interface InputProps extends Props {
	className?: string;
	type: "text" | "email" | "password";
	name: string;
	register: any;
	label: string;
	errorMessage?: string;
	required?: boolean;
}

export default function TextInput({
	intent,
	type,
	name,
	register,
	label,
	errorMessage,
	className,
	required = true,
}: InputProps) {
	const redborders = errorMessage ? "border-red-500" : "";
	return (
		<div className="flex flex-col">
			<label htmlFor={name}>{label}</label>
			<input
				className={inputStyles({ intent, className: redborders })}
				type={type}
				{...register(name)}
				id={name}
				aria-required={required}
				aria-invalid={errorMessage ? "true" : "false"}
			/>
			{errorMessage && <span className="text-sm text-[#EE374A] text-right">{errorMessage}</span>}
		</div>
	);
}
