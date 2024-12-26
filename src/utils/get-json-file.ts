async function fetchDataById(id: string) {
	try {
		const response = await fetch(`/api/get-json?id=${id}`);
		if (!response.ok) {
			throw new Error(`Erro: ${response.statusText}`);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.log('Erro ao buscar os dados:', error);
	}
}

export default fetchDataById;
