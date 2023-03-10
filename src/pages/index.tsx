import Head from "next/head";
import { Button } from "@/components/ui";
import { PaymentForm } from "@/features/payment-form";

export default function Home() {
	return (
		<div className="w-10/12 mx-auto mt-5">
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<PaymentForm />
		</div>
	);
}
