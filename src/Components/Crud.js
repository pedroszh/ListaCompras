import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Crud = () => {
    const dispatch = useDispatch();
    const itens = useSelector(state => state);
    const [itemEdicao, setItemEdicao] = useState(null);
    const [novoNome, setNovoNome] = useState('');

    const removerItem = (id) => {
        dispatch({ type: 'remover', payload: id });
    };

    const editarItem = (item) => {
        setItemEdicao(item);
        setNovoNome(item.nome);
    };

    const salvarEdicao = () => {
        dispatch({ type: 'editar', payload: { ...itemEdicao, nome: novoNome } });
        setItemEdicao(null);
        setNovoNome('');
    };

    return (
        <div>
            <h2>Lista de Compras</h2>
            {itens.length === 0 ? (
                <p>Nenhum item encontrado.</p>
            ) : (
                <ul>
                    {itens.map(item => (
                        <li key={item.id} className="item-container"> {/* Adicionando uma classe para o item */}
                            {itemEdicao && itemEdicao.id === item.id ? (
                                <div>
                                    <input
                                        type="text"
                                        value={novoNome}
                                        onChange={(e) => setNovoNome(e.target.value)}
                                    />
                                    <button onClick={salvarEdicao}>Salvar</button>
                                </div>
                            ) : (
                                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                    <span>{item.nome}</span>
                                    <div className='button-container'>
                                        <button className='btn-editar' onClick={() => editarItem(item)}>
                                            <i className='bx bxs-pencil'></i>
                                        </button>
                                        <button className='btn-remover' onClick={() => removerItem(item.id)}>
                                            <i className='bx bxs-trash'></i> Remover
                                        </button>
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Crud;
