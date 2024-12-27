import { EditableChangeEvent } from '@/components/molecules/select';

export type Attribute = 'DES' | 'FOR' | 'CON' | 'INT' | 'SAB' | 'CAR';

export type SpellSchools =
	| 'Abjuração'
	| 'Adivinhação'
	| 'Convocação'
	| 'Encantamento'
	| 'Evocação'
	| 'Ilusão'
	| 'Necromancia'
	| 'Transmutação';

export type Execution =
	| 'Completa'
	| 'Livre'
	| 'Movimento'
	| 'Padrão'
	| 'Reação';

export type Range = 'Pessoal' | 'Toque' | 'Curto' | 'Médio' | 'Longo';

export type SkillName =
	| 'acrobatics'
	| 'animal_handling'
	| 'athletics'
	| 'performance'
	| 'ride'
	| 'knowledge'
	| 'heal'
	| 'diplomacy'
	| 'deception'
	| 'fortitude'
	| 'stealth'
	| 'warfare'
	| 'initiative'
	| 'intimidation'
	| 'intuition'
	| 'investigation'
	| 'gambling'
	| 'thievery'
	| 'fighting'
	| 'mysticism'
	| 'nobility'
	| 'craft_1'
	| 'craft_2'
	| 'perception'
	| 'driving'
	| 'aim'
	| 'reflexes'
	| 'religion'
	| 'survival'
	| 'will';

export type GenericSkillDetails = {
	name: string;
	trained: boolean;
	attribute: Attribute;
	bonus_others: string;
	armour_penalty?: boolean;
	trained_only?: boolean;
};

export type RoleSkillDetails = GenericSkillDetails & {
	title: string;
};

export type Skills = {
	[key in SkillName]: key extends 'craft_1' | 'craft_2'
		? RoleSkillDetails
		: GenericSkillDetails;
};

export type AttackDetails = {
	name: string;
	test: string;
	damage: string;
	critical: string;
	type: string;
	range: string;
};

export type ArmorDetails = {
	name: string;
	value: string;
	penalty: string;
};

export type EquipmentDetails = {
	name: string;
	weight: string;
};

export type AbilitiesDetails = {
	name: string;
	description: string;
};

export type SpellDetails = {
	name: string;
	description: string;
	school: SpellSchools;
	range: Range;
	execution: Execution;
	area: string;
	duration: string;
	target: string;
	resistance: string;
};

export type Size =
	| 'Minúsculo'
	| 'Pequeno'
	| 'Médio'
	| 'Grande'
	| 'Enorme'
	| 'Colossal';

export type SheetForm = {
	character: string;
	player: string;
	race: string;
	origin: string;
	class: string;
	level: string;
	divinity: string;
	attributes: {
		[key in Attribute]: string;
	};
	lp: {
		total: string;
		actual: string;
	};
	mp: {
		total: string;
		actual: string;
	};
	skills: Skills;
	attacks: AttackDetails[];
	defense: {
		attribute: Attribute;
		bonus_others: string;
		damage_reduction: string;
		armor: ArmorDetails;
		shield: ArmorDetails;
	};
	experience_points: string;
	proficiencies: string;
	size: Size;
	movement: string;
	equipments: EquipmentDetails[];
	total_weight: string;
	tibar: {
		regular: string;
		gold: string;
	};
	abilities: {
		race: AbilitiesDetails[];
		class: AbilitiesDetails[];
		origin: AbilitiesDetails[];
		general: AbilitiesDetails[];
		spell: SpellDetails[];
	};
	spell_modifier: Attribute;
	description: string;
	notes: string;
};

export interface SheetFormComponentProps {
	sheet: SheetForm;
	setSheet?: React.Dispatch<React.SetStateAction<SheetForm>>;
	handleInput: (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
			| EditableChangeEvent
	) => void;
}
