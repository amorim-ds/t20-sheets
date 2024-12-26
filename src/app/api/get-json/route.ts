import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
	// Obtém o parâmetro `id` da URL
	const id = req.nextUrl.searchParams.get('id');

	if (!id) {
		return NextResponse.json(
			{ message: 'ID não fornecido.' },
			{ status: 400 }
		);
	}

	// Caminho completo do arquivo baseado no ID
	const filePath = path.join(
		process.cwd(),
		'data',
		'saved_files',
		`${id}.json`
	);

	// Verifica se o arquivo existe
	if (!fs.existsSync(filePath)) {
		return NextResponse.json(
			{ message: `Arquivo com ID "${id}" não encontrado.` },
			{ status: 404 }
		);
	}

	try {
		// Lê e parseia o conteúdo do arquivo JSON
		const jsonData = fs.readFileSync(filePath, 'utf-8');
		const data = JSON.parse(jsonData);

		return NextResponse.json(data, { status: 200 });
	} catch (error) {
		console.log('Erro ao ler o arquivo:', error);
		return NextResponse.json(
			{ message: 'Erro ao ler o arquivo.' },
			{ status: 500 }
		);
	}
}
