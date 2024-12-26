import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { Label } from '@/components/atoms/text/label';
import { Span } from '@/components/atoms/text/span';
import Arrow from '@/components/atoms/icons/arrow';

export interface EditableChangeEvent {
	target: {
		name: string;
		value: string | number | string[];
	};
}

interface SelectProps {
	options: readonly string[];
	isMulti?: boolean;
	id?: string;
	name?: string;
	value?: string | number | string[];
	onChange?: (e: EditableChangeEvent) => void;
	disabled?: boolean;
	className?: string;
	containerClassName?: string;
	placeholder?: string;
	placeholderClassName?: string;
	iconClassName?: string;
}

const Select = ({
	options,
	name,
	id,
	value,
	onChange,
	className,
	containerClassName,
	placeholder,
	placeholderClassName,
	iconClassName,
	isMulti = false,
	disabled,
}: SelectProps) => {
	const [isVisible, setIsVisible] = useState(false);
	const [isAbove, setIsAbove] = useState(false);
	const selectRef = useRef<HTMLDivElement>(null);
	const optionsRef = useRef<HTMLUListElement>(null);

	// Função para calcular a altura das opções
	const calculateOptionsHeight = () => {
		const container = document.createElement('div');
		container.style.visibility = 'hidden';
		container.style.position = 'absolute';
		container.style.zIndex = '-1';
		container.style.width = 'auto';
		document.body.appendChild(container);

		options.forEach((option) => {
			const listItem = document.createElement('div');
			listItem.className = 'px-3 py-2';
			const textNode = document.createTextNode(option);
			listItem.appendChild(textNode);
			container.appendChild(listItem);
		});

		const height = container.offsetHeight;
		document.body.removeChild(container);
		return height;
	};

	// Fecha o menu ao clicar fora
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				selectRef.current &&
				!selectRef.current.contains(event.target as Node)
			) {
				setIsVisible(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	// Verifica se o item é selecionado
	const isSelected = (item: string) =>
		isMulti ? (value as string[])?.includes(item) : item === value;

	// Alterna a visibilidade do menu e calcula a posição que deve aparecer
	const toggleMenu = () => {
		if (selectRef.current && optionsRef.current) {
			const rect = selectRef.current.getBoundingClientRect();
			const optionsHeight = calculateOptionsHeight();

			// Verifica se há espaço suficiente abaixo do componente
			const spaceBelow = window.innerHeight - rect.bottom;

			if (spaceBelow < optionsHeight) {
				setIsAbove(true);
			} else {
				setIsAbove(false);
			}
		}

		setIsVisible((prev) => !prev);
	};

	const handleSelect = (selectedValue: string) => {
		if (isMulti) {
			const currentValue = (value as string[]) || [];
			const newValue = currentValue.includes(selectedValue)
				? currentValue.filter((item) => item !== selectedValue)
				: [...currentValue, selectedValue];
			onChange?.({
				target: { name, value: newValue },
			} as unknown as React.ChangeEvent<HTMLInputElement>);
		} else {
			onChange?.({
				target: { name, value: selectedValue },
			} as React.ChangeEvent<HTMLInputElement>);
			setIsVisible(false);
		}
	};

	const renderPlaceholder = () => (
		<div className="flex items-center space-x-2 overflow-hidden w-full">
			<Label
				className={classNames(
					'text-ellipsis whitespace-nowrap cursor-pointer',
					{
						'text-gray-medium': !value,
					},
					placeholderClassName
				)}
			>
				{value || placeholder}
			</Label>
		</div>
	);

	const renderOptions = () =>
		options.map((option, index) => (
			<li
				key={option}
				className={classNames(
					'px-3 py-2 cursor-pointer transition-colors hover:bg-gray-light',
					{
						'bg-gray-light': isSelected(option),
					}
				)}
				onClick={() => handleSelect(option)}
				role="option"
				aria-selected={isSelected(option)}
			>
				<div className="flex items-center gap-2">
					<Span className="text-ellipsis text-sm whitespace-nowrap">
						{option}
					</Span>
				</div>
			</li>
		));

	return (
		<div
			ref={selectRef}
			className={classNames(
				'relative rounded-md select-none',
				containerClassName
			)}
		>
			{/* Label opcional */}
			{placeholder && value && (
				<label
					className={classNames(
						'absolute -top-2 text-gray-medium text-xs font-all-small-caps bg-white',
						{
							'left-3': !disabled,
						}
					)}
					htmlFor={id}
				>
					{placeholder}
				</label>
			)}

			{/* Caixa de seleção */}
			<div
				className={classNames(
					'flex items-center justify-between cursor-pointer rounded-md',
					{
						'py-1': !className?.includes('py-'),
						'px-3': !disabled,
						'pointer-events-none': disabled,
					},
					className
				)}
				onClick={toggleMenu}
				aria-haspopup="listbox"
			>
				{renderPlaceholder()}
				{!disabled && (
					<Arrow
						className={classNames('w-3 h-auto', iconClassName)}
					/>
				)}
				<input type="hidden" id={id} name={name} value={value} />
			</div>

			{/* Opções */}
			<ul
				ref={optionsRef}
				className={classNames(
					'absolute min-w-fit w-full bg-white border border-gray rounded-md shadow-lg z-50 mt-1 max-h-[218px] overflow-x-hidden overflow-y-auto',
					{
						hidden: !isVisible,
						'bottom-full mb-2': isAbove,
						'top-full mt-2': !isAbove,
					}
				)}
				role="listbox"
				aria-labelledby={id}
			>
				{renderOptions()}
			</ul>
		</div>
	);
};

export default Select;
