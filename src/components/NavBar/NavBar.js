import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";
import { NavLink,Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav className="NavBar">
            <Link to="/">
                <h3>Neo Ecommerce</h3>
            </Link>
            <div className="navbar-menu">
                
                    <NavLink to={`/category/ramen`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Ramen</NavLink>
                    <NavLink to={`/category/sushi`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Sushi</NavLink>
                    <NavLink to={`/category/teriyaki`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Teriyaki</NavLink>
                
            </div>
            <CartWidget/>
        </nav>
    )
};

export default NavBar