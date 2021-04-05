import React from 'react';
import './prod.css';

const Produtos = ({ produtos }) => (
    <div className="produto">
        <img src={produtos.imageUrl} className="produto__image" />
        <div className="produto__info">
            <h1 className="produto__title">{produtos.title}</h1>
            <footer className="produto__footer">
                {produtos.comments.length > 0 && (
                <div className="produto__comment">"{produtos.comments[0].comment}"</div>
                )}
            <a href={produtos.url} target="_blank" className="produto__link">Fazer Pedido</a>
            </footer>
            <span className="produto__price">R$ {produtos.price}</span>
        </div>
    </div>
);

export default Produtos;