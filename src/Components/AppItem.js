import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// Ação para adicionar item
const adicionarItem = (item) => {
    return {
        type: 'adicionar',
        payload: item,
    };
};

const AppItem = ({ alternarTema, tema }) => {
    const [nome, setNome] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validação do nome do item
        if (nome.trim() === '') {
            setError('Insira um nome válido');
            return; // Não continua se o nome estiver vazio
        }
        
        // Criação do item com ID único
        const item = {
            id: Date.now(),
            nome,
        }; 

        dispatch(adicionarItem(item));
        setNome(''); // Limpa o campo de entrada
        setError('');  // Reseta o erro
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className={error ? 'error-input' : ''}
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome do item"
            />
            <button className="btn-adicionar" type="submit">Adicionar item</button> 

            <div className='secaoErro'>
                {error && <p className='error-message'>{error}</p>}
            </div>
        </form>
    );
};

export default AppItem;