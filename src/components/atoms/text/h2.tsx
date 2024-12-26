export const H2 = ({
	children,
	className,
	...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
	<h2 className={`text-4xl font-extrabold ${className || ''}`} {...props}>
		{children}
	</h2>
);
