import React, { useState } from 'react';

interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
	text: string;
	position?: 'top' | 'bottom' | 'left' | 'right';
	children?: React.ReactNode;
}

const Tooltip = ({ text, position = 'top', children }: TooltipProps) => {
	const [isVisible, setIsVisible] = useState(false);

	// Classes de posição
	const positionClasses = {
		top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
		bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
		left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
		right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
	};

	return (
		<div
			className="relative flex w-fit"
			onMouseEnter={() => setIsVisible(true)}
			onMouseLeave={() => setIsVisible(false)}
			onFocus={() => setIsVisible(true)}
			onBlur={() => setIsVisible(false)}
		>
			{children}

			{/* Tooltip */}
			{isVisible && (
				<div
					className={`
              absolute z-50 ${positionClasses[position]}
              px-3 py-2 text-sm font-medium text-white bg-black
              rounded-lg shadow-lg w-fit text-nowrap
              animate-fade-in whitespace-pre-line
            `}
					role="tooltip"
				>
					{text}
				</div>
			)}
		</div>
	);
};

export default Tooltip;
