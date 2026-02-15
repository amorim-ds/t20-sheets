import { H5 } from '@/components/atoms/text/h5';
import { Span } from '@/components/atoms/text/span';
import Card from '@/components/molecules/card';
import TextArea from '@/components/molecules/textarea';
import { SheetFormComponentProps } from '@/utils/types';
import classNames from 'classnames';

const Notes = ({ sheet, handleInput }: SheetFormComponentProps) => (
	<Card
		className={classNames('flex flex-col group sm:col-span-2', {
			'print:hidden': sheet.description.length < 1,
		})}
	>
		<H5 className="font-tormenta20 text-center group-focus-within:text-primary">
			Anotações
		</H5>
		<TextArea
			className="print:hidden w-full text-sm text-center text-inherit px-2 py-1 rounded-md bg-gray-light outline-primary resize-none"
			rows={10}
			name="notes"
			title="Anotações"
			value={sheet.notes}
			onChange={handleInput}
		></TextArea>
		<Span className="hidden print:block">{sheet.notes}</Span>
	</Card>
);

export default Notes;
