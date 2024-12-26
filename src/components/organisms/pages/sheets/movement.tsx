import { Label } from '@/components/atoms/text/label';
import Input from '@/components/molecules/input';
import { SheetFormComponentProps } from '@/utils/types';

const Movement = ({ sheet, handleInput }: SheetFormComponentProps) => (
	<div className="grid grid-cols-[auto_1fr] items-center gap-3 group">
		<Label
			className="font-tormenta20 text-xs group-focus-within:text-primary"
			htmlFor="movement"
		>
			Deslocamento
		</Label>
		<Input
			className="text-xs  bg-gray-light"
			name="movement"
			value={sheet.movement}
			onChange={handleInput}
		/>
	</div>
);

export default Movement;
