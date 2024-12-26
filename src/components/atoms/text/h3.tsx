export const H3 = ({
	children,
	className,
	...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
	<h3 className={`text-3xl font-bold ${className || ''}`} {...props}>
		{children}
	</h3>
);
