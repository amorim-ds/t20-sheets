'use client';
import { Span } from '@/components/atoms/text/span';
import Input from '@/components/molecules/input';
import classNames from 'classnames';
import { SheetFormComponentProps } from '@/utils/types';
import Card from '@/components/molecules/card';
import Counter from '@/components/molecules/counter';
import { Label } from '@/components/atoms/text/label';
import { useEffect } from 'react';
import { H5 } from '@/components/atoms/text/h5';

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

	useEffect(() => {
		if (sheet.mode === 'create')
			setSheet?.({ ...sheet, total_weight: String(totalWeight()) });
	}, [sheet.attributes.FOR]);

	const renderEquipmentsTableHeaders = (className?: string) => (
		<div className={classNames('grid-cols-[3fr_1fr] gap-1', className)}>
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
			<div className="grid gap-y-3 h-fit">
				<H5 className="font-tormenta20 text-center">
					Lista de Equipamentos
				</H5>
				<div className="grid sm:grid-cols-2 gap-y-1 gap-x-3">
					{renderEquipmentsTableHeaders('grid')}
					{renderEquipmentsTableHeaders('hidden sm:grid')}
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
				<div className="grid grid-cols-2 sm:grid-cols-4 text-center gap-x-3 gap-y-2">
					<div>
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
								value={sheet.total_weight}
								onChange={handleInput}
							/>
						</Span>
						<Span className="text-sm leading-none self-center">
							Carga Máxima
						</Span>
					</div>
					<div className="flex flex-col items-center">
						<Span className="text-lg font-semibold">
							{Number(sheet.total_weight) * 2}
						</Span>
						<Span className="text-sm self-center">Levantar</Span>
					</div>
					<div className="grid gap-1 col-span-2">
						<div className="grid grid-cols-[auto_1fr] gap-3 items-center group">
							<Label className="text-sm group-focus-within:text-primary w-5">
								T$
							</Label>
							<Input
								className="bg-gray-light text-sm w-full"
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
								className="bg-gray-light text-sm w-full"
								name="tibar.gold"
								value={sheet.tibar.gold}
								onChange={handleInput}
							/>
						</div>
					</div>
				</div>
			</div>
		</Card>
	);
};

export default EquipmentList;
