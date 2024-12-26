import { Label } from '@/components/atoms/text/label';
import Select from '@/components/molecules/select';
import { Span } from '@/components/atoms/text/span';
import Card from '@/components/molecules/card';
import { SheetFormComponentProps } from '@/utils/types';

export const getModifiers = (size: string) => {
	let stealthModifier, maneuverModifier;
	switch (size) {
		case 'Minúsculo':
			stealthModifier = '+5';
			maneuverModifier = '-5';
			break;
		case 'Pequeno':
			stealthModifier = '+2';
			maneuverModifier = '-2';
			break;
		case 'Grande':
			stealthModifier = '-2';
			maneuverModifier = '+2';
			break;
		case 'Enorme':
			stealthModifier = '-5';
			maneuverModifier = '+5';
			break;
		case 'Colossal':
			stealthModifier = '-10';
			maneuverModifier = '+10';
			break;
		default:
			stealthModifier = '0';
			maneuverModifier = '0';
			break;
	}
	return [stealthModifier, maneuverModifier];
};

const Size = ({ sheet, handleInput }: SheetFormComponentProps) => {
	const renderModifiers = () => {
		const [stealthModifier, maneuverModifier] = getModifiers(sheet.size);
		return (
			<>
				<b className="text-sm">{stealthModifier}</b> /{' '}
				<b className="text-sm">{maneuverModifier}</b>
			</>
		);
	};
	return (
		<div className="grid grid-cols-[auto_2fr_1fr] items-center gap-3 group">
			<Label
				className="font-tormenta20 text-xs group-focus-within:text-primary"
				htmlFor="size"
			>
				Tamanho
			</Label>
			<Select
				className="text-xs  bg-gray-light"
				name="size"
				value={sheet.size}
				options={[
					'Minúsculo',
					'Pequeno',
					'Médio',
					'Grande',
					'Enorme',
					'Colossal',
				]}
				onChange={handleInput}
			/>
			<Span
				className="text-end text-xs"
				title="Bônus de Furtividade / Bônus de Manobras"
			>
				{renderModifiers()}
			</Span>
		</div>
	);
};

export default Size;
