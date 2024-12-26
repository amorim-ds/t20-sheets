'use client'; // Certifique-se de que o código é executado no cliente

import { useState } from 'react';
import Button from '../atoms/button';

interface CopyUrlModalProps {
	isVisible: boolean;
	setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
	id: string;
}

const CopyUrlModal = ({ isVisible, setIsVisible, id }: CopyUrlModalProps) => {
	// Função para copiar a URL com o ID dinâmico
	const copyUrl = () => {
		const currentUrl = `${window.location.origin}/sheets/${id}`; // Construa a URL com o ID dinâmico
		navigator.clipboard
			.writeText(currentUrl) // Copia para a área de transferência
			.then(() => {
				alert('URL copiada com sucesso!'); // Exibe uma mensagem de sucesso
			})
			.catch(() => {
				alert('Erro ao copiar a URL!'); // Exibe uma mensagem de erro
			});
	};

	// Função para fechar o modal
	const closeModal = () => {
		setIsVisible(false);
	};

	return (
		isVisible && (
			<div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
				<div className="bg-white p-6 rounded-lg shadow-lg w-96">
					<h2 className="text-xl font-semibold mb-4">
						Sua ficha foi salva com sucesso!
					</h2>
					<p className="text-gray-700 mb-4">
						Acesse com:{' '}
						<strong>{`${window.location.origin}/sheets/${id}`}</strong>
					</p>
					<div className="flex justify-between items-center">
						<Button
							onClick={copyUrl}
							className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
						>
							Copiar URL
						</Button>
						<Button
							onClick={closeModal}
							className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
						>
							Fechar
						</Button>
					</div>
				</div>
			</div>
		)
	);
};

export default CopyUrlModal;
