'use client';
import Button from '@/components/atoms/button';
import Input from '@/components/molecules/input';
import { H1 } from '@/components/atoms/text/h1';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { validate as isUUID } from 'uuid';

export default function Home() {
	const [search, setSearch] = useState('');
	const router = useRouter();

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!isUUID(search)) {
			alert('ID inválido!');
			return;
		}

		router.push(`/sheets/${search}`);
	};

	return (
		<main className="w-full h-screen flex flex-col justify-center items-center gap-y-28">
			<H1 className="font-tormenta20 text-primary">Fichas T20</H1>
			<form
				className="flex flex-col items-center gap-y-2"
				onSubmit={handleSubmit}
			>
				<Input
					placeholder="Digite o ID da ficha"
					className="w-80"
					value={search}
					onChange={handleInput}
				/>
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
