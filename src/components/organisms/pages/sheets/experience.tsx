import { Label } from '@/components/atoms/text/label';
import Input from '@/components/molecules/input';
import { SheetFormComponentProps } from '@/utils/types';

const ExperiencePoints = ({ sheet, handleInput }: SheetFormComponentProps) => (
	<div className="grid grid-cols-[auto_1fr] items-center gap-3 group">
		<Label
			className="font-tormenta20 text-xs group-focus-within:text-primary"
			htmlFor="experience_points"
		>
			Pontos de Experiência
		</Label>
		<Input
			className="text-xs  bg-gray-light"
			name="experience_points"
			type="number"
			value={sheet.experience_points}
			onChange={handleInput}
		/>
	</div>
);

export default ExperiencePoints;
