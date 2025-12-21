import { Label } from '@/components/atoms/text/label';
import { Span } from '@/components/atoms/text/span';
import Input from '@/components/molecules/input';
import { SheetFormComponentProps } from '@/utils/types';
import { useEffect, useState } from 'react';

const ExperiencePoints = ({ sheet, handleInput }: SheetFormComponentProps) => {
	const [XPtoLevelUp, setXPToLeveUp] = useState<number>(0);

	const calculateLevelXP = (level: number) => {
		if (level < 1) return 0;
		return 500 * level * (level + 1);
	};

	useEffect(() => {
		if (!sheet.level) return;
		const level: number = Number(sheet.level);
		if (!level) return;
		setXPToLeveUp(calculateLevelXP(level));
	}, [sheet.level]);

	return (
		<div className="flex flex-col gap-1">
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
			<Span className="font-dante-mt-stdS text-xs text-end">
				Próximo nível: <Span className="text-sm">{XPtoLevelUp}</Span>
			</Span>
		</div>
	);
};

export default ExperiencePoints;
