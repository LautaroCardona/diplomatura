
//import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav >
            <div>
                <ul>
                    <li><NavLink to="/" className={({isActive}) => isActive ? "activo": undefined}>Index</NavLink></li> 
                    <li><NavLink to="/Literatura" className={({isActive}) => isActive ? "activo": undefined}>Literatura</NavLink></li>
                    <li><NavLink to="/Peliculas" className={({isActive}) => isActive ? "activo": undefined}>Peliculas</NavLink></li>
                    <li><NavLink to="/Comics" className={({isActive}) => isActive ? "activo": undefined}>Comics</NavLink></li>
                    <li><NavLink to="/Contactos" className={({isActive}) => isActive ? "activo": undefined}>Contactos</NavLink></li>
                </ul>

            </div>
        </nav>
    );
}
export default Nav;