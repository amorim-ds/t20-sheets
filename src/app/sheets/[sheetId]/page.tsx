'use client';
import Card from '@/components/molecules/card';
import Loader from '@/components/organisms/loader';
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
import fetchJsonFromDatabase from '@/utils/get-json-file';
import { SheetForm } from '@/utils/types';
import updateJsonToBucket from '@/utils/update-json-file';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import _ from 'lodash';

const DEBOUNCE_TIME = 3000;

export default function SheetsPage() {
	const [initialSheet, setInitialSheet] = useState<SheetForm>();
	const [sheet, setSheet] = useState<SheetForm>(sheetFormInitialState);
	const params = useParams(); // Obtém os parâmetros da URL
	const [isLoaderVisible, setIsLoaderVisible] = useState<boolean>(false);

	const { sheetId } = params; // Acessa o parâmetro 'sheetId' da URL

	useEffect(() => {
		if (!sheetId) return;
		const loadData = async () => {
			const data = await fetchJsonFromDatabase(sheetId as string);
			if (!data) {
				alert('Não há ficha para ser carregada!');
				return;
			}
			setInitialSheet(JSON.parse(data) as SheetForm);
			setSheet(JSON.parse(data) as SheetForm);
		};
		loadData();
	}, [sheetId]);

	useEffect(() => {
		if (!sheetId || !sheet || !initialSheet) return;
		if (_.isEqual(sheet, initialSheet)) return;

		const timeoutId = setTimeout(async () => {
			setIsLoaderVisible(true);
			const data = await updateJsonToBucket(sheetId as string, sheet);
			if (data.response) setInitialSheet(_.cloneDeep(sheet));
			setIsLoaderVisible(false);
		}, DEBOUNCE_TIME);

		return () => clearTimeout(timeoutId);
	}, [sheet]);

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

	return (
		<>
			<form
				className="w-full overflow-x-hidden px-5 py-5 sm:px-10 ld:px-20 print:px-1 space-y-3 print:space-y-1"
				autoComplete="off"
				noValidate
			>
				<CharDetails sheet={sheet} handleInput={handleInput} />
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
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
			<Loader isVisible={isLoaderVisible} />
		</>
	);
}
