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
	'acrobatics',
	'animal_handling',
	'athletics',
	'performance',
	'ride',
	'knowledge',
	'heal',
	'diplomacy',
	'deception',
	'fortitude',
	'stealth',
	'warfare',
	'initiative',
	'intimidation',
	'intuition',
	'investigation',
	'gambling',
	'thievery',
	'fighting',
	'mysticism',
	'nobility',
	'craft_1',
	'perception',
	'driving',
	'aim',
	'reflexes',
	'religion',
	'survival',
	'will',
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
		acrobatics: {
			name: 'Acrobacia',
			trained: false,
			attribute: 'DES',
			bonus_others: '',
			armour_penalty: true,
		},
		animal_handling: {
			name: 'Adestramento',
			trained: false,
			attribute: 'CAR',
			bonus_others: '',
			trained_only: true,
		},
		athletics: {
			name: 'Atletismo',
			trained: false,
			attribute: 'FOR',
			bonus_others: '',
		},
		performance: {
			name: 'Atuação',
			trained: false,
			attribute: 'CAR',
			bonus_others: '',
		},
		ride: {
			name: 'Cavalgar',
			trained: false,
			attribute: 'DES',
			bonus_others: '',
		},
		knowledge: {
			name: 'Conhecimento',
			trained: false,
			attribute: 'INT',
			bonus_others: '',
			trained_only: true,
		},
		heal: {
			name: 'Cura',
			trained: false,
			attribute: 'SAB',
			bonus_others: '',
		},
		diplomacy: {
			name: 'Diplomacia',
			trained: false,
			attribute: 'CAR',
			bonus_others: '',
		},
		deception: {
			name: 'Enganação',
			trained: false,
			attribute: 'CAR',
			bonus_others: '',
		},
		fortitude: {
			name: 'Fortitude',
			trained: false,
			attribute: 'CON',
			bonus_others: '',
		},
		stealth: {
			name: 'Furtividade',
			trained: false,
			attribute: 'DES',
			bonus_others: '',
			armour_penalty: true,
		},
		warfare: {
			name: 'Guerra',
			trained: false,
			attribute: 'INT',
			bonus_others: '',
			trained_only: true,
		},
		initiative: {
			name: 'Iniciativa',
			trained: false,
			attribute: 'DES',
			bonus_others: '',
		},
		intimidation: {
			name: 'Intimidação',
			trained: false,
			attribute: 'CAR',
			bonus_others: '',
		},
		intuition: {
			name: 'Intuição',
			trained: false,
			attribute: 'SAB',
			bonus_others: '',
		},
		investigation: {
			name: 'Investigação',
			trained: false,
			attribute: 'INT',
			bonus_others: '',
		},
		gambling: {
			name: 'Jogatina',
			trained: false,
			attribute: 'CAR',
			bonus_others: '',
			trained_only: true,
		},
		thievery: {
			name: 'Ladinagem',
			trained: false,
			attribute: 'DES',
			bonus_others: '',
			trained_only: true,
			armour_penalty: true,
		},
		fighting: {
			name: 'Luta',
			trained: false,
			attribute: 'FOR',
			bonus_others: '',
		},
		mysticism: {
			name: 'Misticismo',
			trained: false,
			attribute: 'INT',
			bonus_others: '',
			trained_only: true,
		},
		nobility: {
			name: 'Nobreza',
			trained: false,
			attribute: 'INT',
			bonus_others: '',
			trained_only: true,
		},
		craft_1: {
			name: 'Ofício',
			title: '',
			trained: false,
			attribute: 'INT',
			bonus_others: '',
			trained_only: true,
		},
		craft_2: {
			name: 'Ofício',
			title: '',
			trained: false,
			attribute: 'INT',
			bonus_others: '',
			trained_only: true,
		},
		perception: {
			name: 'Percepção',
			trained: false,
			attribute: 'SAB',
			bonus_others: '',
		},
		driving: {
			name: 'Pilotagem',
			trained: false,
			attribute: 'DES',
			bonus_others: '',
			trained_only: true,
		},
		aim: {
			name: 'Pontaria',
			trained: false,
			attribute: 'DES',
			bonus_others: '',
		},
		reflexes: {
			name: 'Reflexos',
			trained: false,
			attribute: 'DES',
			bonus_others: '',
		},
		religion: {
			name: 'Religião',
			trained: false,
			attribute: 'SAB',
			bonus_others: '',
			trained_only: true,
		},
		survival: {
			name: 'Sobrevivência',
			trained: false,
			attribute: 'SAB',
			bonus_others: '',
		},
		will: {
			name: 'Vontade',
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
