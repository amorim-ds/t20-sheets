import Input from '@/components/molecules/input';
import { H1 } from '@/components/atoms/text/h1';
import { SheetFormComponentProps } from '@/utils/types';
import Link from 'next/link';

const CharacterDetails = ({ sheet, handleInput }: SheetFormComponentProps) => (
	<div className="grid gap-x-3 gap-y-1 print:gap-y-0 grid-cols-2 sm:grid-cols-5">
		<H1 className="font-tormenta20 text-primary col-span-1 sm:col-span-3">
			<Link href="/" title="Voltar para Página Inicial">
				Ficha T20
			</Link>
		</H1>
		<Input
			className="text-sm"
			name="character"
			label="Personagem"
			value={sheet.character}
			onChange={handleInput}
		/>
		<Input
			className="text-sm"
			name="player"
			label="Jogador"
			value={sheet.player}
			onChange={handleInput}
		/>
		<Input
			className="text-sm"
			name="race"
			label="Raça"
			value={sheet.race}
			onChange={handleInput}
		/>
		<Input
			className="text-sm"
			name="class"
			label="Classe"
			value={sheet.class}
			onChange={handleInput}
		/>
		<Input
			className="text-sm"
			name="origin"
			label="Origem"
			value={sheet.origin}
			onChange={handleInput}
		/>
		<Input
			className="text-sm col-span-1"
			name="level"
			label="Nível"
			type="number"
			value={sheet.level}
			onChange={handleInput}
		/>
		<Input
			className="text-sm"
			name="divinity"
			label="Divindade"
			value={sheet.divinity}
			onChange={handleInput}
		/>
	</div>
);

export default CharacterDetails;
