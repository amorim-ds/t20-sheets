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
			school: 'Abjuração',
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
		<div
			className={classNames('flex gap-3 justify-around items-center', {
				hidden: sheet.abilities.spell.length < 1,
			})}
		>
			<div className="flex gap-3 items-center">
				<Label className="font-bold all-small-caps leading-none">
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
				<Span className="font-bold all-small-caps leading-none">
					Teste de Resistência
				</Span>
				<Span className="font-bold text-lg">
					{calcSpellResistance()}
				</Span>
			</div>
		</div>
	);

	const renderDetails = (listIndex: number) => (
		<div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3">
			<div className="flex flex-col gap-1 group items-center">
				<Label className="all-small-caps group-focus-within:text-primary">
					Escola
				</Label>
				<Select
					className="bg-gray-light w-full"
					containerClassName="w-full"
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
					className="bg-gray-light w-full"
					containerClassName="w-full"
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
					className="bg-gray-light w-full"
					containerClassName="w-full"
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
					Alvo
				</Label>
				<Input
					className="bg-gray-light w-full text-center"
					name={`abilities.spell.${listIndex}.target`}
					value={sheet.abilities.spell[listIndex].target}
					onChange={handleInput}
				/>
			</div>
			<div className="flex flex-col gap-1 group items-center">
				<Label className="all-small-caps group-focus-within:text-primary">
					Duração
				</Label>
				<Input
					className="bg-gray-light w-full text-center"
					name={`abilities.spell.${listIndex}.duration`}
					value={sheet.abilities.spell[listIndex].duration}
					onChange={handleInput}
				/>
			</div>
			<div className="flex flex-col gap-1 group items-center">
				<Label className="all-small-caps group-focus-within:text-primary">
					Área
				</Label>
				<Input
					className="bg-gray-light w-full text-center"
					name={`abilities.spell.${listIndex}.area`}
					value={sheet.abilities.spell[listIndex].area}
					onChange={handleInput}
				/>
			</div>
			<div className="flex flex-col gap-1 group items-center col-span-3 sm:col-span-2 lg:col-span-1">
				<Label className="all-small-caps group-focus-within:text-primary">
					Resistência
				</Label>
				<Input
					className="bg-gray-light text-center w-full"
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
					<Input
						className="bg-gray-light flex-grow text-lg font-bold"
						name={`abilities.spell.${index}.name`}
						title={`Nome de Magia ${index + 1}`}
						value={item.name}
						onChange={handleInput}
					/>
				</div>
				{renderDetails(index)}
				<div className="flex flex-col gap-y-1 group">
					<textarea
						className="w-full flex-grow text-sm px-2 py-1 rounded-md bg-gray-light outline-primary resize-none print:border-none print:px-0"
						rows={10}
						name={`abilities.spell.${index}.description`}
						title={`Efeito de Magia ${index + 1}`}
						value={item.description}
						onChange={handleInput}
					></textarea>
				</div>
			</div>
		));

	return (
		<Card
			className={classNames(
				'sm:col-span-2 lg:col-span-4 text-center grid gap-6',
				{
					'print:hidden': sheet.abilities.spell.length < 1,
				}
			)}
		>
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
