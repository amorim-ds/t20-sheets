import { H5 } from '@/components/atoms/text/h5';
import Card from '@/components/molecules/card';
import Input from '@/components/molecules/input';
import { SheetFormComponentProps } from '@/utils/types';

const Attributes = ({ sheet, handleInput }: SheetFormComponentProps) => (
	<Card className="grid gap-x-3 gap-y-2 items-center grid-cols-6 sm:col-span-2">
		<H5 className="text-center font-tormenta20 col-span-6">Atributos</H5>
		{Object.entries(sheet.attributes).map(([key, value], index) => (
			<Input
				key={index}
				className="text-3xl text-center font-bold size-10 sm:size-14  bg-gray-light"
				labelClassName="text-xl font-tormenta20"
				containerClassName="items-center"
				type="number"
				name={`attributes.${key}`}
				label={key}
				title={key}
				value={value}
				onChange={handleInput}
			/>
		))}
	</Card>
);

export default Attributes;
