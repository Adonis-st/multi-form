import { cva, VariantProps } from "cva";
import { ComponentProps, ReactNode } from "react";

const formStyles = cva("flex flex-col", {
	variants: {
		intent: {
			primary: "w-full",
		},
	},
	defaultVariants: {
		intent: "primary",
	},
});

type Props = VariantProps<typeof formStyles> & ComponentProps<"form">;

interface FormProps extends Props {
	children: ReactNode;
	handleSubmit: () => any;
	callBackFn: () => void;
}

export default function TextInput({ intent, handleSubmit, callBackFn, children }: FormProps) {
	return (
		<form onSubmit={handleSubmit(callBackFn)} className={formStyles({ intent })}>
			{children}
			<button type="submit">submit</button>
		</form>
	);
}
