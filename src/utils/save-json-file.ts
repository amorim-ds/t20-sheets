import { supabase } from '@/config/supabase';
import { v4 as uuidv4 } from 'uuid';

const saveJsonToBucket = async (jsonData: any) => {
	const uuid = uuidv4();
	const fileName = `${uuid}.json`;

	const { data, error } = await supabase.storage
		.from('sheets')
		.upload(fileName, JSON.stringify(jsonData), {
			contentType: 'application/json',
		});

	if (error) {
		console.error('Erro ao salvar no bucket:', error);
	} else {
		return { response: data, fileName: uuid };
	}
};

export default saveJsonToBucket;
