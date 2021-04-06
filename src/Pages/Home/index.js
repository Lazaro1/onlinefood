import Produtos from "../../components/Produtos/produtos";

import './style.css'

function Home() {

    const products = [
        {
            "id": 1,
            "title": "Hamburguer Artesanal Cheddar Burger",
            "price": 17.99,
            "imageUrl": "https://www.sabornamesa.com.br/media/k2/items/cache/b9ad772005653afce4d4bd46c2efe842_L.jpg",
            "url": `https://api.whatsapp.com/send?phone=5538997351977&text=${products[0].price}`,
            "comments": "Aproveite essa oferta!",
        },
        {
            "id": 2,
            "title": "Hamburguer Artesanal Cheddar Burger",
            "price": 17.99,
            "imageUrl": "https://www.sabornamesa.com.br/media/k2/items/cache/b9ad772005653afce4d4bd46c2efe842_L.jpg",
            "url": "https://api.whatsapp.com/send?phone=5538997351977&text=Ol%C3%A1!%20Gostaria%20de%20realizar%20o%20meu%20pedido.%20",
            "comments": "Aproveite essa oferta!",
        }
        ]

    return(
        <div className="home-container">
            <h1>Cardápio</h1>
            {products.map((product) => (
                <Produtos title={product.title} price={product.price} imageUrl={product.imageUrl} url={product.url} comment={product.comments} />
            ))}
        </div>
    )
}

export default Home;