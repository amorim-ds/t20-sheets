import { Span } from '@/components/atoms/text/span';
import Select from '@/components/molecules/select';
import Input from '@/components/molecules/input';
import classNames from 'classnames';
import Armor from '@/components/atoms/icons/armor';
import Sword from '@/components/atoms/icons/sword';
import { getModifiers } from './size';
import {
	GenericSkillDetails,
	RoleSkillDetails,
	SheetFormComponentProps,
} from '@/utils/types';
import { attributes } from '@/utils/constants';
import { H5 } from '@/components/atoms/text/h5';
import Card from '@/components/molecules/card';

const Skills = ({ sheet, setSheet, handleInput }: SheetFormComponentProps) => {
	const toggleTrained = (key: string) => {
		const newState: any = { ...sheet };
		newState.skills[key].trained = !newState.skills[key].trained;
		setSheet?.(newState);
	};

	const shouldSum = (skill: GenericSkillDetails) =>
		!(skill.trained_only && !skill.trained);

	const calcLevelBonus = (): number => Math.floor(Number(sheet.level) / 2);

	const calcTrainedBonus = (): number =>
		Number(sheet.level) <= 6 ? 2 : Number(sheet.level) <= 14 ? 4 : 6;

	const calcTotal = (
		key: string,
		skill: GenericSkillDetails
	): string | number => {
		if (!shouldSum(skill)) return '-';
		let value =
			Number(sheet.attributes[skill.attribute]) +
			Number(skill.bonus_others) +
			calcLevelBonus();
		if (skill.trained) value += calcTrainedBonus();
		if (skill.armour_penalty) {
			value -= Math.abs(Number(sheet.defense.armor.penalty));
			value -= Math.abs(Number(sheet.defense.shield.penalty));
		}
		if (key == 'stealth') value += Number(getModifiers(sheet.size)[0]);
		return value;
	};

	const renderSkillsTableHeader = (className?: string) =>
		['Perícias', 'Total', 'Mod. de Atributo', 'Outros'].map(
			(value, index) => (
				<Span
					className={classNames(
						'all-small-caps font-light leading-none',
						{
							'font-tormenta20': index == 0,
							'justify-self-center text-center': index !== 0,
						},
						className
					)}
					key={`header-item-${index}`}
				>
					{value}
				</Span>
			)
		);

	const renderSkillsTableContent = () =>
		Object.entries(sheet.skills).map(([key, skill], index) => (
			<div
				className="grid grid-cols-[3fr_1fr_2fr_2fr] w-full gap-y-1"
				key={`content-${index}`}
			>
				{(index == 0 || index == 11 || index == 16 || index == 22) &&
					renderSkillsTableHeader(
						classNames({
							grid: index == 0,
							'hidden sm:grid lg:hidden': index == 16,
							'hidden lg:grid': index == 11 || index == 22,
						})
					)}
				<div className="flex flex-row gap-1 items-center">
					<Span
						className={classNames(
							'all-small-caps cursor-pointer w-fit h-fit select-none',
							{
								'text-primary': skill.trained,
							}
						)}
						role="button"
						onClick={() => toggleTrained(key)}
					>
						{skill.name}
					</Span>
					{skill.trained_only && (
						<div title="Apenas Treinado">
							<Sword
								className={classNames('h-2 w-auto', {
									'fill-primary': skill.trained,
								})}
							/>
						</div>
					)}
					{skill.armour_penalty && (
						<div title="Penalidade de Armadura">
							<Armor
								className={classNames('h-2 w-auto', {
									'fill-primary': skill.trained,
								})}
							/>
						</div>
					)}
					{(key == 'craft_1' || key == 'craft_2' || key == 'craft_3') && (
						<Span>
							<Input
								className="bg-gray-light w-12 sm:w-16 px-0 text-center text-xs"
								name={`skills.${key}.title`}
								value={(skill as RoleSkillDetails).title}
								onChange={handleInput}
								title="Nome do Ofício"
							/>
						</Span>
					)}
				</div>
				<Span className="justify-self-center font-bold">
					{calcTotal(key, skill)}
				</Span>
				<Select
					className="pl-2 pr-2 text-xs w-12"
					containerClassName="justify-self-center bg-gray-light border-none"
					iconClassName="hidden"
					placeholderClassName="w-full text-center"
					options={attributes}
					name={`skills.${key}.attribute`}
					value={skill.attribute}
					onChange={handleInput}
				/>
				<Input
					className="w-12 text-xs border-none bg-gray-light justify-self-center text-center"
					name={`skills.${key}.bonus_others`}
					title={`${skill.name} (Outros)`}
					value={skill.bonus_others}
					type="number"
					onChange={handleInput}
				/>
			</div>
		));

	return (
		<Card className="w-full space-y-1 sm:col-span-2 lg:col-span-4">
			<H5 className="text-center font-tormenta20">Lista de Perícias</H5>
			<div className="flex justify-around">
				<Span className="all-small-caps leading-tight">
					Bônus de Nível: <b>{calcLevelBonus()}</b>
				</Span>
				<Span className="all-small-caps leading-tight">
					Bônus de Treinamento: <b>{calcTrainedBonus()}</b>
				</Span>
			</div>
			<div className="relative grid sm:grid-rows-auto-16 lg:grid-rows-auto-11 grid-flow-row sm:grid-flow-col gap-1 print:gap-0 w-full">
				{renderSkillsTableContent()}
			</div>
			<div className="flex justify-around">
				<Span className="flex items-center gap-1 all-small-caps leading-tight">
					<Sword className="h-2 w-auto" />
					Apenas Treinado
				</Span>
				<Span className="flex items-center gap-1 all-small-caps leading-tight">
					<Armor className="h-2 w-auto" />
					Penalidade de Armadura
				</Span>
			</div>
		</Card>
	);
};

export default Skills;
