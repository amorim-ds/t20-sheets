export const H4 = ({
	children,
	className,
	...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
	<h4 className={`text-2xl font-semibold ${className || ''}`} {...props}>
		{children}
	</h4>
);
