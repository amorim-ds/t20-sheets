import { H5 } from '@/components/atoms/text/h5';
import { Label } from '@/components/atoms/text/label';
import { Span } from '@/components/atoms/text/span';
import Card from '@/components/molecules/card';
import Counter from '@/components/molecules/counter';
import Input from '@/components/molecules/input';
import Select from '@/components/molecules/select';
import { executions, ranges, spellSchools } from '@/utils/constants';
import { SheetFormComponentProps } from '@/utils/types';
import classNames from 'classnames';

const Spells = ({ sheet, handleInput, setSheet }: SheetFormComponentProps) => {
	const newAbility = () => {
		const newState = { ...sheet };
		newState.abilities.spell.push({
			name: '',
			description: '',
			area: '',
			duration: '',
			execution: 'Padrão',
			range: 'Pessoal',
			resistance: '',
			school: 'Abjur',
			target: '',
		});
		setSheet?.(newState);
	};

	const removeAbility = () => {
		if (sheet.abilities.spell.length <= 0) return;
		const newState = { ...sheet };
		newState.abilities.spell.pop();
		setSheet?.(newState);
	};

	const calcSpellResistance = () =>
		10 +
		Math.floor(Number(sheet.level) / 2) +
		Number(sheet.attributes[sheet.spell_modifier]);

	const renderModifiers = () => (
		<div className="flex gap-3 justify-around items-center">
			<div className="flex gap-3 items-center">
				<Label className="font-bold all-small-caps">
					Atributo-chave
				</Label>
				<Select
					className="bg-gray-light w-14"
					placeholderClassName="justify-self-center w-full"
					iconClassName="hidden"
					name="spell_modifier"
					value={sheet.spell_modifier}
					onChange={handleInput}
					options={['INT', 'SAB', 'CAR']}
				/>
			</div>
			<div className="flex gap-3 items-center">
				<Span className="font-bold all-small-caps">
					Teste de Resistência
				</Span>
				<Span className="font-bold text-lg">
					{calcSpellResistance()}
				</Span>
			</div>
		</div>
	);

	const renderDetails = (listIndex: number) => (
		<div className="grid grid-cols-[auto_auto_auto] lg:grid-cols-[auto_auto_auto_auto_auto_auto] gap-3">
			<div className="flex flex-col gap-1 group items-center">
				<Label className="all-small-caps group-focus-within:text-primary">
					Escola
				</Label>
				<Select
					className="bg-gray-light w-20"
					placeholderClassName="justify-self-center w-full"
					iconClassName="hidden"
					name={`abilities.spell.${listIndex}.school`}
					options={spellSchools}
					value={sheet.abilities.spell[listIndex].school}
					onChange={handleInput}
				/>
			</div>
			<div className="flex flex-col gap-1 group items-center">
				<Label className="all-small-caps group-focus-within:text-primary">
					Execução
				</Label>
				<Select
					className="bg-gray-light w-[5.5rem]"
					placeholderClassName="justify-self-center w-full"
					iconClassName="hidden"
					name={`abilities.spell.${listIndex}.execution`}
					options={executions}
					value={sheet.abilities.spell[listIndex].execution}
					onChange={handleInput}
				/>
			</div>
			<div className="flex flex-col gap-1 group items-center">
				<Label className="all-small-caps group-focus-within:text-primary">
					Alcance
				</Label>
				<Select
					className="bg-gray-light w-20"
					placeholderClassName="justify-self-center w-full"
					iconClassName="hidden"
					name={`abilities.spell.${listIndex}.range`}
					options={ranges}
					value={sheet.abilities.spell[listIndex].range}
					onChange={handleInput}
				/>
			</div>
			<div className="flex flex-col gap-1 group items-center">
				<Label className="all-small-caps group-focus-within:text-primary">
					Área
				</Label>
				<Input
					className="bg-gray-light w-20 sm:w-40 text-center"
					name={`abilities.spell.${listIndex}.area`}
					value={sheet.abilities.spell[listIndex].area}
					onChange={handleInput}
				/>
			</div>
			<div className="flex flex-col gap-1 group items-center">
				<Label className="all-small-caps group-focus-within:text-primary">
					Duração
				</Label>
				<Input
					className="bg-gray-light w-20 sm:w-40 text-center"
					name={`abilities.spell.${listIndex}.duration`}
					value={sheet.abilities.spell[listIndex].duration}
					onChange={handleInput}
				/>
			</div>
			<div className="flex flex-col gap-1 group items-center">
				<Label className="all-small-caps group-focus-within:text-primary">
					Resistência
				</Label>
				<Input
					className="bg-gray-light text-center w-40 sm:w-60"
					name={`abilities.spell.${listIndex}.resistance`}
					value={sheet.abilities.spell[listIndex].resistance}
					onChange={handleInput}
				/>
			</div>
		</div>
	);

	const renderList = () =>
		sheet.abilities.spell.map((item, index) => (
			<div className="flex flex-col gap-y-2" key={index}>
				<div className="flex flex-col gap-y-1 group">
					<Label className="text-start all-small-caps group-focus-within:text-primary">
						Nome
					</Label>
					<Input
						className="bg-gray-light flex-grow text-lg font-bold"
						name={`abilities.spell.${index}.name`}
						title={`Nome de Habilidade ${index}`}
						value={item.name}
						onChange={handleInput}
					/>
				</div>
				{renderDetails(index)}
				<div className="flex flex-col gap-y-1 group">
					<Label className="text-start all-small-caps group-focus-within:text-primary">
						Efeito
					</Label>
					<textarea
						className="min-h-[5.5rem] w-full flex-grow text-sm px-2 py-1 rounded-md bg-gray-light outline-primary resize-none print:border-none print:px-0"
						name={`abilities.spell.${index}.description`}
						title={`Descrição de Habilidade ${index}`}
						value={item.description}
						onChange={handleInput}
					></textarea>
				</div>
			</div>
		));

	return (
		<Card className="sm:col-span-2 lg:col-span-4 text-center grid gap-3">
			<H5 className="font-tormenta20">Magias</H5>
			{renderModifiers()}
			{renderList()}
			<Counter
				minusClassName={classNames({
					'fill-secondary': sheet.abilities.spell.length > 0,
					'fill-gray': sheet.abilities.spell.length <= 0,
					'cursor-pointer': sheet.abilities.spell.length > 0,
				})}
				onMinusClick={removeAbility}
				onPlusClick={newAbility}
			/>
		</Card>
	);
};

export default Spells;
