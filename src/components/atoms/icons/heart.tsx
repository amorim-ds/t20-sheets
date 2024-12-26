import * as React from 'react';
import { SVGProps } from 'react';
const Heart = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="15 25 70 60" {...props}>
		<path
			fill="none"
			stroke="#000"
			strokeWidth={2}
			d="M50 82s30-19 30-36c0-9-7-16-15-16-6 0-11 4-15 9-4-5-9-9-15-9-8 0-15 7-15 16 0 17 30 36 30 36z"
		/>
	</svg>
);
export default Heart;
