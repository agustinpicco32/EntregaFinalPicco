
import ItemCount from "../ItemCount.js/ItemCount";

const ItemDetail =({id, name, img, category, description, price, stock}) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="info">
                    Descripcion: {description}
                </p>
                <p className="info">
                    Precio: ${price}
                </p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("cantidad agregada", quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail;