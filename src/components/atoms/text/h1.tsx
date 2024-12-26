import classNames from 'classnames';

export const H1 = ({
	children,
	className,
	...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
	<h1
		className={classNames('text-4xl sm:text-5xl font-black', className)}
		{...props}
	>
		{children}
	</h1>
);
