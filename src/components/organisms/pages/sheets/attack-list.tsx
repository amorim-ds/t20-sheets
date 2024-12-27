import { Span } from '@/components/atoms/text/span';
import Input from '@/components/molecules/input';
import classNames from 'classnames';
import { SheetFormComponentProps } from '@/utils/types';
import Card from '@/components/molecules/card';
import Counter from '@/components/molecules/counter';

const AttackList = ({
	sheet,
	handleInput,
	setSheet,
}: SheetFormComponentProps) => {
	const newAttack = () => {
		const newState = { ...sheet };
		newState.attacks.push({
			name: '',
			test: '',
			damage: '',
			critical: '',
			type: '',
			range: '',
		});
		setSheet?.(newState);
	};

	const removeAttack = () => {
		if (sheet.attacks.length <= 1) return;
		const newState = { ...sheet };
		newState.attacks.pop();
		setSheet?.(newState);
	};

	const renderAttacksTableHeaders = () => (
		<div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] gap-1">
			{['Ataque', 'Teste', 'Dano', 'Crítico', 'Tipo', 'Alcance'].map(
				(value, index) => (
					<Span
						className={classNames('text-xs leading-none', {
							'font-tormenta20': index == 0,
						})}
						key={index}
					>
						{value}
					</Span>
				)
			)}
		</div>
	);

	const renderAttacksTableContent = () =>
		sheet.attacks.map((item, index) => (
			<div
				className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] gap-1"
				key={index}
			>
				<Input
					className="bg-gray-light w-full text-xs border-none"
					name={`attacks.${index}.name`}
					title={`Ataque ${index + 1}`}
					onChange={handleInput}
					value={item.name}
				/>
				<Input
					className="bg-gray-light w-full text-xs border-none"
					name={`attacks.${index}.test`}
					title={`Teste ${index + 1}`}
					onChange={handleInput}
					value={item.test}
				/>
				<Input
					className="bg-gray-light w-full text-xs border-none"
					name={`attacks.${index}.damage`}
					title={`Dano ${index + 1}`}
					onChange={handleInput}
					value={item.damage}
				/>
				<Input
					className="bg-gray-light w-full text-xs border-none"
					name={`attacks.${index}.critical`}
					title={`Crítico ${index + 1}`}
					onChange={handleInput}
					value={item.critical}
				/>
				<Input
					className="bg-gray-light w-full text-xs border-none"
					name={`attacks.${index}.type`}
					title={`Tipo ${index + 1}`}
					onChange={handleInput}
					value={item.type}
				/>
				<Input
					className="bg-gray-light w-full text-xs border-none"
					name={`attacks.${index}.range`}
					title={`Alcance ${index + 1}`}
					onChange={handleInput}
					value={item.range}
				/>
			</div>
		));

	return (
		<Card className="grid sm:col-span-2">
			<div className="grid gap-y-3 h-fit">
				<div className="grid gap-1">
					{renderAttacksTableHeaders()}
					{renderAttacksTableContent()}
				</div>
				<Counter
					minusClassName={classNames({
						'fill-secondary': sheet.attacks.length > 1,
						'fill-gray': sheet.attacks.length <= 1,
						'cursor-pointer': sheet.attacks.length > 1,
					})}
					onMinusClick={removeAttack}
					onPlusClick={newAttack}
				/>
			</div>
		</Card>
	);
};

export default AttackList;
