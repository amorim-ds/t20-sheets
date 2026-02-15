import React from 'react';

const TextArea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  const handlePaste = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
    // Previne a colagem padrão
    event.preventDefault();
    
    // Obtém o texto da área de transferência
    const pastedText = event.clipboardData.getData('text');
    
    // Substitui quebras de linha por espaços
    const processedText = pastedText.replace(/[\n\r]+/g, ' ');
    
    // Obtém o elemento textarea atual
    const textarea = event.currentTarget;
    
    // Insere o texto processado manualmente
    document.execCommand('insertText', false, processedText);
  };

  return (
    <textarea
      {...props}
      onPaste={handlePaste}
    />
  );
};

export default TextArea;