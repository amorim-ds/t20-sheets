import { Label } from '@/components/atoms/text/label';
import { Span } from '@/components/atoms/text/span';
import Input from '@/components/molecules/input';
import { SheetFormComponentProps } from '@/utils/types';
import { useEffect, useState } from 'react';

const LEVEL_XP: Record<number, number> = {
	1: 0,
	2: 1000,
	3: 3000,
	4: 6000,
	5: 10000,
	6: 15000,
	7: 21000,
	8: 28000,
	9: 36000,
	10: 45000,
	11: 55000,
	12: 66000,
	13: 78000,
	14: 91000,
	15: 105000,
	16: 120000,
	17: 136000,
	18: 153000,
	19: 171000,
	20: 190000,
}

const ExperiencePoints = ({ sheet, handleInput }: SheetFormComponentProps) => {
	const [remainingXP, setRemainingXP] = useState<number>(0);

	useEffect(() => {
		if (!sheet.level) return;
		const level: number = Number(sheet.level);
		if (!level) return;
		if (level < 1 || level >= 20) {
			setRemainingXP(0);
			return;
		}
		const currentXP = Number(sheet.experience_points) | 0;
		setRemainingXP(Math.max(LEVEL_XP[level+1] - currentXP, 0));
	}, [sheet.level, sheet.experience_points]);

	return (
		<div className='flex flex-col gap-1'>
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
			<Span className="font-dante-mt-stdS text-[10px] text-end">
				Próximo nível: {remainingXP}
			</Span>
		</div>
	);
}

export default ExperiencePoints;
