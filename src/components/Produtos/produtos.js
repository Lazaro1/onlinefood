import React from 'react';
import './prod.css';


const Produtos = ({ title, price, imageUrl, url, comment }) => (
    <div className="produto">
        <img src={imageUrl} className="produto__image" />
        <div className="produto__info">
            <h1 className="produto__title">{title}</h1>
            <footer className="produto__footer">
            <div className="produto__comment">"{comment}"</div>
            <a href={url} target="_blank" className="produto__link">Fazer Pedido</a>
            </footer>
            <span className="produto__price">R$ {price}</span>
        </div>
    </div>
);

export default Produtos;