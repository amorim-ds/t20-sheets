import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

// POST handler
export async function POST(req: NextRequest) {
	try {
		const data = await req.json(); // Lê o corpo da requisição

		if (!data) {
			return NextResponse.json(
				{ message: 'Nenhum dado fornecido.' },
				{ status: 400 }
			);
		}

		// Gerar UUID para o nome do arquivo
		const uuid = uuidv4();
		const fileName = `${uuid}.json`;

		// Caminho para salvar o arquivo
		const filePath = path.join(
			process.cwd(),
			'data',
			'saved_files',
			fileName
		);

		// Criar diretório, se necessário
		fs.mkdirSync(path.dirname(filePath), { recursive: true });

		// Salvar o arquivo
		fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

		return NextResponse.json(
			{ message: 'Arquivo salvo com sucesso.', fileName: uuid },
			{ status: 200 }
		);
	} catch (error) {
		console.log('Erro ao salvar o arquivo:', error);
		return NextResponse.json(
			{ message: 'Erro ao salvar o arquivo.', error },
			{ status: 500 }
		);
	}
}

// PATCH handler para atualizar um arquivo existente
export async function PATCH(req: NextRequest) {
	try {
		// Extrai o `id` do parâmetro de consulta (query string)
		const id = req.nextUrl.searchParams.get('id');

		if (!id) {
			return NextResponse.json(
				{ message: 'ID não fornecido.' },
				{ status: 400 }
			);
		}

		const data = await req.json(); // Lê o corpo da requisição

		if (!data) {
			return NextResponse.json(
				{ message: 'Nenhum dado fornecido para atualização.' },
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

		// Lê o conteúdo atual do arquivo
		const existingData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

		// Atualiza os dados (mesmo que você possa substituir completamente ou mesclar)
		const updatedData = { ...existingData, ...data };

		// Salva os dados atualizados no arquivo
		fs.writeFileSync(
			filePath,
			JSON.stringify(updatedData, null, 2),
			'utf8'
		);

		return NextResponse.json(
			{
				message: 'Arquivo atualizado com sucesso.',
				fileName: `${id}.json`,
				updatedData,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log('Erro ao atualizar o arquivo:', error);
		return NextResponse.json(
			{ message: 'Erro ao atualizar o arquivo.' },
			{ status: 500 }
		);
	}
}

// Manejo de métodos não permitidos
export async function GET() {
	return NextResponse.json(
		{ message: 'Método não permitido.' },
		{ status: 405 }
	);
}
