import React from 'react';
import classNames from 'classnames';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
	rows?: number | 'auto';
	columns?: number | 'auto';
}

const Grid = ({ rows, columns, children, className, ...props }: GridProps) => {
	return (
		<div
			className={classNames(
				'grid gap-3',
				{
					[`grid-rows-${rows}`]: Number.isInteger(rows),
					'grid-rows-auto': rows === 'auto',
					[`grid-cols-${columns}`]: Number.isInteger(columns),
					'grid-cols-auto': columns === 'auto',
				},
				className
			)}
			{...props}
		>
			{children}
		</div>
	);
};

export default Grid;
