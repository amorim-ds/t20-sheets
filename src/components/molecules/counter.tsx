import classNames from 'classnames';
import Minus from '../atoms/icons/minus';
import Plus from '../atoms/icons/plus';

interface CounterProps {
	minusClassName?: string;
	plusClassName?: string;
	onMinusClick: () => void;
	onPlusClick: () => void;
}

const Counter = ({
	minusClassName,
	plusClassName,
	onMinusClick,
	onPlusClick,
}: CounterProps) => (
	<div className="flex flex-row gap-3 print:hidden">
		<Minus
			className={classNames('w-4 h-auto', minusClassName)}
			width="1.2rem"
			height="100%"
			onClick={onMinusClick}
		/>
		<Plus
			className={classNames(
				'fill-primary cursor-pointer w-4 h-auto',
				plusClassName
			)}
			onClick={onPlusClick}
		/>
	</div>
);

export default Counter;
