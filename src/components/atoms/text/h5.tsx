import classNames from 'classnames';

export const H5 = ({
	children,
	className,
	...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
	<h5 className={classNames('text-lg font-bold', className)} {...props}>
		{children}
	</h5>
);
