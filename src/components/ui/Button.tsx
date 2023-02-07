import { cva, VariantProps } from "cva";
import { ComponentProps } from "react";

const buttonStyles = cva(["font-semibold", "border", "rounded disabled:hidden"], {
	variants: {
		intent: {
			primary: ["bg-blue-500", "text-white", "border-transparent", "hover:bg-blue-600"],
			// **or**
			// primary: "bg-blue-500 text-white border-transparent hover:bg-blue-600",
			secondary: ["bg-white", "text-gray-800", "border-gray-400", "hover:bg-gray-100"],
		},
		size: {
			small: ["text-sm", "py-1", "px-2"],
			medium: ["text-base", "py-2", "px-4"],
		},
		fullWidth: {
			true: "w-full",
		},
	},
	// compoundVariants: [
	// 	{
	// 		intent: "primary",
	// 		size: "medium",
	// 		// class: "uppercase",
	// 		// **or** if you're a React.js user, `className` may feel more consistent:
	// 		className: "uppercase",
	// 	},
	// ],
	defaultVariants: {
		intent: "primary",
		size: "medium",
	},
});

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

interface Props extends ButtonProps {
	children: string;
}

export default function Button({ intent, size, fullWidth, children, ...props }: Props) {
	return (
		<button className={buttonStyles({ intent, size, fullWidth })} {...props}>
			{children}
		</button>
	);
}
