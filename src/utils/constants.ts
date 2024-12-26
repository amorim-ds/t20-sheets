import {
	Attribute,
	Execution,
	Range,
	SheetForm,
	Size,
	SkillName,
	SpellSchools,
} from './types';

export const attributes: Attribute[] = [
	'DES',
	'FOR',
	'CON',
	'INT',
	'SAB',
	'CAR',
];

export const sizes: Size[] = [
	'Minúsculo',
	'Pequeno',
	'Médio',
	'Grande',
	'Enorme',
	'Colossal',
];

export const executions: Execution[] = [
	'Completa',
	'Livre',
	'Padrão',
	'Reação',
];

export const ranges: Range[] = ['Pessoal', 'Toque', 'Curto', 'Médio', 'Longo'];

export const spellSchools: SpellSchools[] = [
	'Abjur',
	'Adiv',
	'Conv',
	'Encan',
	'Evoc',
	'Ilu',
	'Necro',
	'Trans',
];

export const skillNames: SkillName[] = [
	'Acrobacia',
	'Adestramento',
	'Atletismo',
	'Atuação',
	'Cavalgar',
	'Conhecimento',
	'Cura',
	'Diplomacia',
	'Enganação',
	'Fortitude',
	'Furtividade',
	'Guerra',
	'Iniciativa',
	'Intimidação',
	'Intuição',
	'Investigação',
	'Jogatina',
	'Ladinagem',
	'Luta',
	'Misticismo',
	'Nobreza',
	'Ofício',
	'Percepção',
	'Pilotagem',
	'Pontaria',
	'Reflexos',
	'Religião',
	'Sobrevivência',
	'Vontade',
];

export const sheetFormInitialState: SheetForm = {
	character: '',
	player: '',
	race: '',
	origin: '',
	class: '',
	divinity: '',
	level: '',
	attributes: {
		DES: '',
		FOR: '',
		CON: '',
		INT: '',
		SAB: '',
		CAR: '',
	},
	lp: {
		total: '',
		actual: '',
	},
	mp: {
		total: '',
		actual: '',
	},
	skills: {
		Acrobacia: {
			trained: false,
			attribute: 'DES',
			bonus_others: '',
			armour_penalty: true,
		},
		Adestramento: {
			trained: false,
			attribute: 'CAR',
			bonus_others: '',
			trained_only: true,
		},
		Atletismo: {
			trained: false,
			attribute: 'FOR',
			bonus_others: '',
		},
		Atuação: {
			trained: false,
			attribute: 'CAR',
			bonus_others: '',
		},
		Cavalgar: {
			trained: false,
			attribute: 'DES',
			bonus_others: '',
		},
		Conhecimento: {
			trained: false,
			attribute: 'INT',
			bonus_others: '',
			trained_only: true,
		},
		Cura: {
			trained: false,
			attribute: 'SAB',
			bonus_others: '',
		},
		Diplomacia: {
			trained: false,
			attribute: 'CAR',
			bonus_others: '',
		},
		Enganação: {
			trained: false,
			attribute: 'CAR',
			bonus_others: '',
		},
		Fortitude: {
			trained: false,
			attribute: 'CON',
			bonus_others: '',
		},
		Furtividade: {
			trained: false,
			attribute: 'DES',
			bonus_others: '',
			armour_penalty: true,
		},
		Guerra: {
			trained: false,
			attribute: 'INT',
			bonus_others: '',
			trained_only: true,
		},
		Iniciativa: {
			trained: false,
			attribute: 'DES',
			bonus_others: '',
		},
		Intimidação: {
			trained: false,
			attribute: 'CAR',
			bonus_others: '',
		},
		Intuição: {
			trained: false,
			attribute: 'SAB',
			bonus_others: '',
		},
		Investigação: {
			trained: false,
			attribute: 'INT',
			bonus_others: '',
		},
		Jogatina: {
			trained: false,
			attribute: 'CAR',
			bonus_others: '',
			trained_only: true,
		},
		Ladinagem: {
			trained: false,
			attribute: 'DES',
			bonus_others: '',
			trained_only: true,
			armour_penalty: true,
		},
		Luta: {
			trained: false,
			attribute: 'FOR',
			bonus_others: '',
		},
		Misticismo: {
			trained: false,
			attribute: 'INT',
			bonus_others: '',
			trained_only: true,
		},
		Nobreza: {
			trained: false,
			attribute: 'INT',
			bonus_others: '',
			trained_only: true,
		},
		Ofício: {
			name: '',
			trained: false,
			attribute: 'INT',
			bonus_others: '',
			trained_only: true,
		},
		Percepção: {
			trained: false,
			attribute: 'SAB',
			bonus_others: '',
		},
		Pilotagem: {
			trained: false,
			attribute: 'DES',
			bonus_others: '',
			trained_only: true,
		},
		Pontaria: {
			trained: false,
			attribute: 'DES',
			bonus_others: '',
		},
		Reflexos: {
			trained: false,
			attribute: 'DES',
			bonus_others: '',
		},
		Religião: {
			trained: false,
			attribute: 'SAB',
			bonus_others: '',
			trained_only: true,
		},
		Sobrevivência: {
			trained: false,
			attribute: 'SAB',
			bonus_others: '',
		},
		Vontade: {
			trained: false,
			attribute: 'SAB',
			bonus_others: '',
		},
	},
	attacks: [
		{
			name: '',
			test: '',
			damage: '',
			critical: '',
			type: '',
			range: '',
		},
	],
	defense: {
		attribute: 'DES',
		bonus_others: '',
		damage_reduction: '',
		armor: {
			name: '',
			value: '',
			penalty: '',
		},
		shield: {
			name: '',
			value: '',
			penalty: '',
		},
	},
	experience_points: '',
	proficiencies: '',
	size: 'Médio',
	movement: '',
	equipments: [
		{
			name: '',
			weight: '',
		},
	],
	tibar: {
		regular: '',
		gold: '',
	},
	abilities: {
		race: [],
		class: [],
		general: [],
		spell: [],
	},
	spell_modifier: 'INT',
	description: '',
	notes: '',
};