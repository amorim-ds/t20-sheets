import { H4 } from '@/components/atoms/text/h4';
import { H5 } from '@/components/atoms/text/h5';
import Card from '@/components/molecules/card';
import { SheetFormComponentProps } from '@/utils/types';

const Proficiencies = ({ sheet, handleInput }: SheetFormComponentProps) => (
	<Card className="flex flex-col group">
		<H5 className="font-tormenta20 text-center group-focus-within:text-primary">
			Proficiências
		</H5>
		<textarea
			className="w-full flex-grow text-sm text-center text-inherit px-2 py-1 rounded-md bg-gray-light outline-primary resize-none print:border-none print:px-0"
			name="proficiencies"
			title="Proficiências"
			value={sheet.proficiencies}
			onChange={handleInput}
		></textarea>
	</Card>
);

export default Proficiencies;
