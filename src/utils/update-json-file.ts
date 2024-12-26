import { supabase } from '@/config/supabase';

const updateJsonToBucket = async (id: string, jsonData: any) => {
	const fileName = `${id}.json`;

	// Convertendo o JSON para string e criando um Blob
	const jsonString = JSON.stringify(jsonData);
	const blob = new Blob([jsonString], { type: 'application/json' });

	const { data, error } = await supabase.storage
		.from('sheets')
		.update(fileName, blob, {
			contentType: 'application/json',
			cacheControl: '0',
		});

	if (error) {
		console.log('Erro ao salvar no bucket:', error);
		return { error: error.message };
	} else {
		return { response: data, fileName: id };
	}
};

export default updateJsonToBucket;
