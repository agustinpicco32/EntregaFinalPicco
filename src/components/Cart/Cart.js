import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import { act } from 'react-dom/test-utils';



const Cart = () => {
    const { cart, clearCart, getTotal} = useContext(CartContext)
    const totalQuantity = cart.length
    console.log (cart)
    const total = getTotal();
    if(totalQuantity ===0){
        return (
            <div className='cart_final'>
                <h1>No hay items en el carrito</h1>
                <Link to ='/' className='Optionp'>Productos</Link>
            </div>
        )
    }
    console.log(total)

    return (
        <div className='cart_final'>
            { cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3 className='total'>Total: ${total}</h3>
            <button onClick={() => clearCart()} className='Button'>Limpiar carrito</button>
            <Link to='/checkout' className='Optionc'>Confirmar compra</Link>
        </div>
    )
}

export default Cart;