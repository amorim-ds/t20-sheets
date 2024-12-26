import classNames from 'classnames';

const Card = ({
	className,
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={classNames(
			'bg-white rounded-md px-3 py-2 print:py-0',
			className
		)}
		{...props}
	>
		{children}
	</div>
);

export default Card;
