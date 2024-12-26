import type { Metadata } from 'next';
import './styles/globals.css';

export const metadata: Metadata = {
	title: 'Fichas T20',
	description: 'Fichas de personagem para o RPG Tormenta20',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
			<body>{children}</body>
		</html>
	);
}
