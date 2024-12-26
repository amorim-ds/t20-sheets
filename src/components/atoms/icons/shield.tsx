import * as React from 'react';
import { SVGProps } from 'react';
const Shield = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="40 5 120 140" {...props}>
		<path
			fill="none"
			stroke="#000"
			strokeWidth={4}
			d="M50 10h100c10 30 10 100-50 130C40 110 40 40 50 10Z"
		/>
	</svg>
);
export default Shield;
