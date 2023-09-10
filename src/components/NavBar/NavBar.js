import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return(
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Ramen</button>
                <button>Sushi</button>
                <button>Teriyaki</button>
            </div>
            <CartWidget/>
        </nav>
    )
};

export default NavBar