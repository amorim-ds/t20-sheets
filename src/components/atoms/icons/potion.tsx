import * as React from 'react';
import { SVGProps } from 'react';
const Potion = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="15 65 171 190" {...props}>
		<circle
			cx={100}
			cy={170}
			r={80}
			fill="none"
			stroke="#000"
			strokeWidth={6}
		/>
		<path
			fill="none"
			stroke="#000"
			strokeWidth={6}
			d="M85 100a15 10 0 0 1 30 0v20a15 10 0 0 1-30 0z"
		/>
		<ellipse
			cx={100}
			cy={90}
			fill="#8b4513"
			stroke="#000"
			strokeWidth={6}
			rx={15}
			ry={10}
		/>
		<rect
			width={30}
			height={20}
			x={85}
			y={70}
			fill="#8b4513"
			stroke="#000"
			strokeWidth={6}
			rx={10}
			ry={10}
		/>
	</svg>
);
export default Potion;
