import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Compatibilidade com versões anteriores ao Node.js 20.11.0
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname, // Diretório base para resolver caminhos
});

const eslintConfig = [
	...compat.config({
		extends: ['next'],
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
		},
	}),
];

export default eslintConfig;
