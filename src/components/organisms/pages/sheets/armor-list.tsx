import { Label } from '@/components/atoms/text/label';
import Card from '@/components/molecules/card';
import Input from '@/components/molecules/input';
import { SheetFormComponentProps } from '@/utils/types';

const ArmorList = ({ sheet, handleInput }: SheetFormComponentProps) => {
	const renderRow = (title: string, key: 'armor' | 'shield') => (
		<>
			<div className="group flex flex-col">
				<Label className="font-tormenta20 text-xs group-focus-within:text-primary">
					{title}
				</Label>
				<Input
					className="bg-gray-light  text-xs"
					name={`defense.${key}.name`}
					value={sheet.defense[key].name}
					onChange={handleInput}
				/>
			</div>
			<div className="group flex flex-col">
				<Label className="text-xs group-focus-within:text-primary">
					Defesa
				</Label>
				<Input
					className="bg-gray-light  text-xs w-full"
					name={`defense.${key}.value`}
					value={sheet.defense[key].value}
					onChange={handleInput}
					type="number"
				/>
			</div>
			<div className="group flex flex-col">
				<Label className="text-xs group-focus-within:text-primary">
					Penalidade
				</Label>
				<Input
					className="bg-gray-light  text-xs w-full"
					name={`defense.${key}.penalty`}
					value={sheet.defense[key].penalty}
					onChange={handleInput}
					type="number"
				/>
			</div>
		</>
	);
	return (
		<Card className="grid grid-cols-[2fr_1fr_1fr] gap-1">
			{renderRow('Armadura', 'armor')}
			{renderRow('Escudo', 'shield')}
		</Card>
	);
};

export default ArmorList;
