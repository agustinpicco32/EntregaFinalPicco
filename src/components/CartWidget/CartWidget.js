import cart from './assets/shopping-cart-outlined.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext);

    return(
        <Link to='/cart' className='CartWidget'>
            <img src ={cart} alt='cart-widget'/>
            {totalQuantity()}
        </Link>
    )
}

export default CartWidget;