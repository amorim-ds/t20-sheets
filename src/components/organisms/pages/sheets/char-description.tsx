import { H5 } from '@/components/atoms/text/h5';
import Card from '@/components/molecules/card';
import { SheetFormComponentProps } from '@/utils/types';
import classNames from 'classnames';

const CharDescription = ({ sheet, handleInput }: SheetFormComponentProps) => (
	<Card
		className={classNames('flex flex-col group sm:col-span-2', {
			'print:hidden': sheet.description.length < 1,
		})}
	>
		<H5 className="font-tormenta20 text-center group-focus-within:text-primary">
			Descrição do Personagem
		</H5>
		<textarea
			className="w-full text-sm text-center text-inherit px-2 py-1 rounded-md bg-gray-light outline-primary resize-none print:border-none print:px-0"
			rows={10}
			name="description"
			title="Descrição do Personagem"
			value={sheet.description}
			onChange={handleInput}
		></textarea>
	</Card>
);

export default CharDescription;
