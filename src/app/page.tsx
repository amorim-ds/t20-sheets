import Button from '@/components/atoms/button';
import Input from '@/components/molecules/input';
import { H1 } from '@/components/atoms/text/h1';
import Link from 'next/link';

export default function Home() {
	return (
		<main className="w-full h-full flex flex-col justify-center items-center gap-y-28">
			<H1 className="font-tormenta20 text-primary">Fichas T20</H1>
			<form className="flex flex-col items-center gap-y-2">
				<Input placeholder="Digite o ID da ficha" className="w-80" />
				<Button type="submit" className="w-32">
					Pesquisa
				</Button>
			</form>
			<div>
				<Link href="/sheets">
					<Button type="button" className="w-32">
						Criar Nova Ficha
					</Button>
				</Link>
			</div>
		</main>
	);
}
