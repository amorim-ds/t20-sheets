import classNames from 'classnames';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	labelClassName?: string;
	containerClassName?: string;
}

const Input = ({
	name,
	className,
	label,
	labelClassName,
	containerClassName,
	...props
}: InputProps) => {
	const renderInputElement: () => React.JSX.Element = () => (
		<input
			className={classNames(
				{
					'rounded-md': !className?.includes('rounded'),
					'px-2': !className?.includes('px-'),
					'py-1': !className?.includes('py-'),
				},
				'outline-primary no-number-spinner',
				className
			)}
			name={name}
			title={label}
			{...props}
		/>
	);

	return (
		<>
			{label ? (
				<div
					className={classNames(
						'flex flex-col group',
						containerClassName
					)}
				>
					<label
						className={classNames(
							'all-small-caps font-light group-focus-within:text-primary',
							labelClassName
						)}
						htmlFor={name}
					>
						{label}
					</label>
					{renderInputElement()}
				</div>
			) : (
				<>{renderInputElement()}</>
			)}
		</>
	);
};

export default Input;
