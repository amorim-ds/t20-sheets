async function saveJsonFile(
	data: any,
	method: 'POST' | 'PATCH' = 'POST',
	id?: string
) {
	const pathname = !id ? '/api/save-json' : `/api/save-json?id=${id}`;
	try {
		const response = await fetch(pathname, {
			method,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		const result = await response.json();
		return result;
	} catch (error) {
		console.log('Erro ao salvar o JSON:', error);
	}
}

export default saveJsonFile;
