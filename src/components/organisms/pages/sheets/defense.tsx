import Shield from '@/components/atoms/icons/shield';
import { H5 } from '@/components/atoms/text/h5';
import { Label } from '@/components/atoms/text/label';
import { Span } from '@/components/atoms/text/span';
import Card from '@/components/molecules/card';
import Input from '@/components/molecules/input';
import Select from '@/components/molecules/select';
import { attributes } from '@/utils/constants';
import { SheetFormComponentProps } from '@/utils/types';

const Defense = ({ sheet, handleInput }: SheetFormComponentProps) => {
	const calcTotal = () =>
		10 +
		Number(sheet.attributes[sheet.defense.attribute]) +
		Number(sheet.defense.armor.value) +
		Number(sheet.defense.shield.value) +
		Number(sheet.defense.bonus_others);

	const renderLabels = () =>
		['Mod. de', 'Bônus de Armadura', 'Bônus de Escudo', 'Outros'].map(
			(value, index) => (
				<Span className="text-xs text-center leading-none" key={index}>
					{value}
					{index == 0 && (
						<Select
							className="pl-2 pr-2 py-0 text-xs leading-none"
							containerClassName="justify-self-center bg-gray-light border-none"
							iconClassName="hidden"
							name="defense.attribute"
							value={sheet.defense.attribute}
							onChange={handleInput}
							options={attributes}
						/>
					)}
				</Span>
			)
		);

	return (
		<Card className="grid grid-cols-[auto_1fr] gap-4">
			<div className="relative w-fit h-fit">
				<Shield className="h-20 w-auto" />
				<H5 className="absolute top-0 left-1/2 -translate-x-1/2 font-tormenta20">
					Defesa
				</H5>
				<Span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-3xl">
					{calcTotal()}
				</Span>
				<div className="absolute top-1/2 -right-3 -translate-y-1/2 bg-white rounded-full border-2 border-black size-7 text-sm flex items-center justify-center">
					=<b className="font-bold text-base">10</b>
				</div>
			</div>
			<div className="grid gap-y-1">
				<div className="grid grid-cols-[1fr_1fr_1fr_auto] gap-1 h-fit items-center">
					{renderLabels()}
					<Span className="relative text-xs">
						+
						<b className="font-bold text-center text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
							{Number(sheet.attributes[sheet.defense.attribute])}
						</b>
					</Span>
					<Span className="relative text-xs">
						+
						<b className="font-bold text-center text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
							{Number(sheet.defense.armor.value)}
						</b>
					</Span>
					<Span className="relative text-xs">
						+
						<b className="font-bold text-center text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
							{Number(sheet.defense.shield.value)}
						</b>
					</Span>
					<Span className="relative">
						<Span className="absolute top-1/2 -left-3 -translate-y-1/2 text-xs">
							+
						</Span>
						<Input
							className="border-0 bg-gray-light w-9 font-bold text-center text-lg px-0 py-0 justify-self-center"
							title="Defesa (Outros)"
							type="number"
							name="defense.bonus_others"
							value={sheet.defense.bonus_others}
							onChange={handleInput}
						/>
					</Span>
				</div>
				<div className="grid grid-cols-[auto_1fr] gap-1 items-center group">
					<Label className="font-tormenta20 text-xs text-center text-nowrap group-focus-within:text-primary">
						RD
					</Label>
					<Input
						className="text-xs border-0 bg-gray-light w-full"
						name="defense.damage_reduction"
						value={sheet.defense.damage_reduction}
						onChange={handleInput}
						title="Redução de Dano"
					/>
				</div>
			</div>
		</Card>
	);
};

export default Defense;
