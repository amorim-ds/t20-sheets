import { supabase } from '@/config/supabase';

const fetchJsonFromDatabase = async (id: string) => {
	const { data, error } = await supabase.storage
		.from('sheets')
		.download(`${id}.json`);

	if (error) {
		console.error('Erro ao buscar do banco de dados:', error);
	} else {
		return data.text();
	}
};

export default fetchJsonFromDatabase;
