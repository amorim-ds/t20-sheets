import { H5 } from '@/components/atoms/text/h5';
import { Label } from '@/components/atoms/text/label';
import { Span } from '@/components/atoms/text/span';
import Card from '@/components/molecules/card';
import Counter from '@/components/molecules/counter';
import Input from '@/components/molecules/input';
import { SheetFormComponentProps } from '@/utils/types';
import classNames from 'classnames';

interface AbilitiesProps extends SheetFormComponentProps {
	type: 'race' | 'class' | 'general' | 'origin';
	title: string;
}

const Abilities = ({
	sheet,
	handleInput,
	setSheet,
	type,
	title,
}: AbilitiesProps) => {
	const newAbility = () => {
		const newState = { ...sheet };
		newState.abilities[type].push({
			name: '',
			description: '',
		});
		setSheet?.(newState);
	};

	const removeAbility = () => {
		if (sheet.abilities[type].length <= 0) return;
		const newState = { ...sheet };
		newState.abilities[type].pop();
		setSheet?.(newState);
	};

	const renderList = () =>
		sheet.abilities[type].map((item, index) => (
			<div className="flex flex-col gap-y-2" key={index}>
				<div className="flex flex-col gap-y-1 group">
					<Input
						className="bg-gray-light flex-grow text-lg font-bold px-2 print:px-0"
						name={`abilities.${type}.${index}.name`}
						title={`Nome de Habilidade ${index + 1}`}
						placeholder="Nome"
						value={item.name}
						onChange={handleInput}
					/>
				</div>
				<div className="flex flex-col gap-y-1 group">
					<textarea
						className="print:hidden w-full flex-grow text-sm px-2 py-1 rounded-md bg-gray-light outline-primary resize-none"
						rows={5}
						name={`abilities.${type}.${index}.description`}
						placeholder="Descrição"
						title={`Descrição de Habilidade ${index + 1}`}
						value={item.description}
						onChange={handleInput}
					></textarea>
					<Span className="text-start hidden print:block">
						{item.description}
					</Span>
				</div>
			</div>
		));

	return (
		<Card
			className={classNames(
				'sm:col-span-2 lg:col-span-4 text-center grid gap-6',
				{
					'print:hidden': sheet.abilities[type].length < 1,
				}
			)}
		>
			<H5 className="font-tormenta20">{title}</H5>
			{renderList()}
			<Counter
				minusClassName={classNames({
					'fill-secondary': sheet.abilities[type].length > 0,
					'fill-gray': sheet.abilities[type].length <= 0,
					'cursor-pointer': sheet.abilities[type].length > 0,
				})}
				onMinusClick={removeAbility}
				onPlusClick={newAbility}
			/>
		</Card>
	);
};

export default Abilities;
