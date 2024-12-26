import { H4 } from '@/components/atoms/text/h4';
import { Span } from '@/components/atoms/text/span';
import Input from '@/components/molecules/input';
import Plus from '@/components/atoms/icons/plus';
import Minus from '@/components/atoms/icons/minus';
import classNames from 'classnames';
import { SheetFormComponentProps } from '@/utils/types';
import Card from '@/components/molecules/card';
import Counter from '@/components/molecules/counter';
import { Label } from '@/components/atoms/text/label';

const EquipmentList = ({
	sheet,
	handleInput,
	setSheet,
}: SheetFormComponentProps) => {
	const newEquipment = () => {
		const newState = { ...sheet };
		newState.equipments.push({
			name: '',
			weight: '',
		});
		setSheet?.(newState);
	};

	const removeEquipment = () => {
		if (sheet.equipments.length <= 1) return;
		const newState = { ...sheet };
		newState.equipments.pop();
		setSheet?.(newState);
	};

	const currentWeight = () =>
		sheet.equipments.reduce((total, equipment) => {
			return total + Number(equipment.weight);
		}, 0);

	const totalWeight = () => {
		const strength = Number(sheet.attributes.FOR);
		const strengthBonus = strength > 0 ? strength * 2 : strength;
		return 10 + strengthBonus;
	};

	const renderEquipmentsTableHeaders = () => (
		<div className="grid grid-cols-[3fr_1fr] gap-1">
			{['Equipamento', 'Peso'].map((value, index) => (
				<Span
					className={classNames('text-xs leading-none', {
						'font-tormenta20': index == 0,
					})}
					key={index}
				>
					{value}
				</Span>
			))}
		</div>
	);

	const renderEquipmentsTableContent = () =>
		sheet.equipments.map((item, index) => (
			<div className="grid grid-cols-[3fr_1fr] gap-1" key={index}>
				<Input
					className="bg-gray-light w-full text-xs border-none"
					name={`equipments.${index}.name`}
					title={`Equipamento ${index + 1}`}
					onChange={handleInput}
					value={item.name}
				/>
				<Input
					className="bg-gray-light w-full text-xs border-none"
					name={`equipments.${index}.weight`}
					title={`Peso ${index + 1}`}
					type="number"
					onChange={handleInput}
					value={item.weight}
				/>
			</div>
		));

	return (
		<Card className="grid sm:col-span-2">
			<div className="grid gap-1 h-fit">
				<div className="grid grid-cols-2 gap-y-1 gap-x-3">
					{renderEquipmentsTableHeaders()}
					{renderEquipmentsTableHeaders()}
					{renderEquipmentsTableContent()}
				</div>
				<Counter
					minusClassName={classNames({
						'fill-secondary': sheet.equipments.length > 1,
						'fill-gray': sheet.equipments.length <= 1,
						'cursor-pointer': sheet.equipments.length > 1,
					})}
					onMinusClick={removeEquipment}
					onPlusClick={newEquipment}
				/>
				<div className="grid grid-rows-2 grid-cols-[1fr_1fr_2fr] grid-flow-col text-center gap-1">
					<Span className="flex gap-1 justify-center items-center">
						<b
							className={classNames('text-lg', {
								'text-secondary':
									currentWeight() > totalWeight(),
							})}
						>
							{currentWeight()}
						</b>
						<Span className="text-xs">de</Span>
						<Input
							className="text-lg text-center bg-gray-light w-8 px-0 py-0 font-bold"
							name="total_weight"
							defaultValue={totalWeight()}
							onChange={handleInput}
						/>
					</Span>
					<Span className="text-sm">Carga Máxima</Span>
					<Span className="text-lg font-semibold">
						{totalWeight() * 2}
					</Span>
					<Span className="text-sm">Levantar</Span>
					<div className="grid grid-cols-[auto_1fr] gap-3 items-center group">
						<Label className="text-sm group-focus-within:text-primary w-5">
							T$
						</Label>
						<Input
							className="bg-gray-light text-sm flex-grow"
							name="tibar.regular"
							value={sheet.tibar.regular}
							onChange={handleInput}
						/>
					</div>
					<div className="grid grid-cols-[auto_1fr] gap-3 items-center group">
						<Label className="text-sm group-focus-within:text-primary w-5">
							TO
						</Label>
						<Input
							className="bg-gray-light text-sm flex-grow"
							name="tibar.gold"
							value={sheet.tibar.gold}
							onChange={handleInput}
						/>
					</div>
				</div>
			</div>
		</Card>
	);
};

export default EquipmentList;
