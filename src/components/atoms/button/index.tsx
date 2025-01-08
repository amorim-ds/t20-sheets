const Button = ({
	children,
	className,
	...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
	<button
		className={`flex justify-center items-center gap-3 all-small-caps font-bold bg-primary px-2 py-1 text-white rounded-md outline-none transition-colors hover:bg-primary-dark ${className || ''}`}
		{...props}
	>
		{children}
	</button>
);

export default Button;
