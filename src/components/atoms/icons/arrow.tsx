import * as React from 'react';
const Arrow = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 6"
		fill="none"
		{...props}
	>
		<path d="m0 .5 5 5 5-5H0Z" />
	</svg>
);

export default Arrow;
