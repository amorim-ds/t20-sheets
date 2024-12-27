import Heart from '@/components/atoms/icons/heart';
import Potion from '@/components/atoms/icons/potion';
import { H5 } from '@/components/atoms/text/h5';
import { Label } from '@/components/atoms/text/label';
import Card from '@/components/molecules/card';
import Input from '@/components/molecules/input';
import { SheetFormComponentProps } from '@/utils/types';
import classNames from 'classnames';

const StatCard = ({
	icon: Icon,
	title,
	nameTotal,
	valueTotal,
	nameActual,
	valueActual,
	inputClassName,
	handleInput,
}: {
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	title: string;
	nameTotal: string;
	valueTotal: string;
	nameActual: string;
	valueActual: string;
	inputClassName: string;
	handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
	<Card className="grid grid-cols-[6rem_1fr] items-center overflow-hidden">
		<div className="relative justify-self-center">
			<Icon className="w-auto h-20" />
			<Input
				className={classNames(
					'px-0 py-0 text-xl w-12 h-auto text-center font-bold bg-gray-light border-none absolute left-1/2 -translate-x-1/2',
					inputClassName
				)}
				type="number"
				name={nameTotal}
				title={title}
				value={valueTotal}
				onChange={handleInput}
			/>
		</div>
		<div className="flex flex-col h-full items-center gap-3">
			<H5 className="text-center font-tormenta20 col-span-2">{title}</H5>
			<Input
				className="text-2xl w-20 h-auto text-center font-bold bg-gray-light border-none"
				type="number"
				name={nameActual}
				title={`Pontos de ${title} Atuais`}
				value={valueActual}
				onChange={handleInput}
			/>
		</div>
		<Label className="text-center text-xs">Máximos</Label>
		<Label className="text-center text-xs">Atuais</Label>
	</Card>
);

const Stats = ({ sheet, handleInput }: SheetFormComponentProps) => {
	return (
		<>
			<StatCard
				icon={Heart}
				title="Pontos de Vida"
				nameTotal="lp.total"
				valueTotal={sheet.lp.total}
				nameActual="lp.actual"
				valueActual={sheet.lp.actual}
				inputClassName="top-1/2 -translate-y-1/2"
				handleInput={handleInput}
			/>
			<StatCard
				icon={Potion}
				title="Pontos de Mana"
				nameTotal="mp.total"
				valueTotal={sheet.mp.total}
				nameActual="mp.actual"
				valueActual={sheet.mp.actual}
				inputClassName="top-[55%] -translate-y-[45%]"
				handleInput={handleInput}
			/>
		</>
	);
};

export default Stats;
