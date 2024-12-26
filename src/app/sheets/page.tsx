'use client';
import Button from '@/components/atoms/button';
import Card from '@/components/molecules/card';
import CopyUrlModal from '@/components/organisms/copy-url';
import Abilities from '@/components/organisms/pages/sheets/abilities';
import ArmorList from '@/components/organisms/pages/sheets/armor-list';
import AttackList from '@/components/organisms/pages/sheets/attack-list';
import Attributes from '@/components/organisms/pages/sheets/attributes';
import CharDescription from '@/components/organisms/pages/sheets/char-description';
import CharDetails from '@/components/organisms/pages/sheets/char-details';
import Defense from '@/components/organisms/pages/sheets/defense';
import EquipmentList from '@/components/organisms/pages/sheets/equipment-list';
import ExperiencePoints from '@/components/organisms/pages/sheets/experience';
import Movement from '@/components/organisms/pages/sheets/movement';
import Notes from '@/components/organisms/pages/sheets/notes';
import Proficiency from '@/components/organisms/pages/sheets/proficiencies';
import Size from '@/components/organisms/pages/sheets/size';
import Skills from '@/components/organisms/pages/sheets/skills';
import Spells from '@/components/organisms/pages/sheets/spells';
import Stats from '@/components/organisms/pages/sheets/stats';
import { sheetFormInitialState } from '@/utils/constants';
import saveJsonFile from '@/utils/save-json-file';
import { SheetForm } from '@/utils/types';
import { useState } from 'react';

export default function SheetsPage() {
	const [sheet, setSheet] = useState<SheetForm>(sheetFormInitialState);
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [id, setId] = useState<string>('');

	const handleInput = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLSelectElement>
			| React.ChangeEvent<HTMLTextAreaElement>
			| { target: { name: string; value: any } }
	) => {
		const path = e.target.name;
		const value = e.target.value;

		setSheet((prev) => {
			const keys = path.split('.');
			const newState = { ...prev };
			let current: any = newState;

			keys.slice(0, -1).forEach((key) => {
				if (!current[key]) current[key] = {};
				current = current[key];
			});

			current[keys[keys.length - 1]] = value;

			return newState;
		});
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = await saveJsonFile(sheet);
		setId(data.fileName);
		setIsVisible(true);
	};

	return (
		<>
			<form
				className="w-full overflow-x-hidden px-5 py-5 md:px-20 print:px-1 space-y-3"
				onSubmit={handleSubmit}
				autoComplete="off"
				noValidate
			>
				<Button
					className="h-fit w-20 justify-self-end flex place-content-center print:hidden"
					type="submit"
				>
					Salvar
				</Button>
				<CharDetails sheet={sheet} handleInput={handleInput} />
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-3 print:gap-y-2">
					<Attributes sheet={sheet} handleInput={handleInput} />
					<Stats sheet={sheet} handleInput={handleInput} />
					<Defense sheet={sheet} handleInput={handleInput} />
					<ArmorList sheet={sheet} handleInput={handleInput} />
					<Proficiency sheet={sheet} handleInput={handleInput} />
					<Card className="grid gap-1">
						<ExperiencePoints
							sheet={sheet}
							handleInput={handleInput}
						/>
						<Movement sheet={sheet} handleInput={handleInput} />
						<Size sheet={sheet} handleInput={handleInput} />
					</Card>
					<Skills
						sheet={sheet}
						setSheet={setSheet}
						handleInput={handleInput}
					/>
					<AttackList
						sheet={sheet}
						handleInput={handleInput}
						setSheet={setSheet}
					/>
					<EquipmentList
						sheet={sheet}
						handleInput={handleInput}
						setSheet={setSheet}
					/>
					<CharDescription sheet={sheet} handleInput={handleInput} />
					<Notes sheet={sheet} handleInput={handleInput} />
					<Abilities
						sheet={sheet}
						handleInput={handleInput}
						setSheet={setSheet}
						type="race"
						title="Habilidades de Raça"
					/>
					<Abilities
						sheet={sheet}
						handleInput={handleInput}
						setSheet={setSheet}
						type="class"
						title="Habilidades de Classe"
					/>
					<Abilities
						sheet={sheet}
						handleInput={handleInput}
						setSheet={setSheet}
						type="origin"
						title="Habilidades de Origem"
					/>
					<Abilities
						sheet={sheet}
						handleInput={handleInput}
						setSheet={setSheet}
						type="general"
						title="Poderes Gerais"
					/>
					<Spells
						sheet={sheet}
						handleInput={handleInput}
						setSheet={setSheet}
					/>
				</div>
			</form>
			<CopyUrlModal
				isVisible={isVisible}
				setIsVisible={setIsVisible}
				id={id}
			/>
		</>
	);
}
