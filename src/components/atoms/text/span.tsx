export const Span = ({
	children,
	className,
	...props
}: React.HTMLAttributes<HTMLSpanElement>) => (
	<span className={`${className || ''}`} {...props}>
		{children}
	</span>
);
