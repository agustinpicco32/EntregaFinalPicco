import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js/ItemDetailContainer.js';
import Cart from './components/Cart/Cart.js';
import { CartProvider } from './context/CartContext.js';
import CheckOut from './components/CheckOut/CheckOut.js';



function App() {
    return (
    <div className="App">
        <BrowserRouter>
            <CartProvider>
                <NavBar/>
                <Routes>
                    <Route path="/" element={ <ItemListContainer greeting={"Todos nuestros productos"}/>}/>
                    <Route path="/category/:categoryId" element={ <ItemListContainer greeting={"Productos por categoria"}/>}/>
                    <Route path="/item/:itemId" element={ <ItemDetailContainer />}/>
                    <Route path='/cart' element= {<Cart/>}/>
                    <Route path='/checkout' element= {<CheckOut/>}/>
                    <Route path="*" element={ <h1>404 NOT FOUND</h1>}/>
                </Routes>
            </CartProvider>
        </BrowserRouter>
    </div>
    
);
}

export default App;