import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav >
            <div>
                <ul>
                    <li><Link to="/">Index</Link></li>  
                    <li><Link to="/Literatura">Literatura</Link></li>
                    <li><Link to="/Peliculas">Peliculas</Link></li>
                    <li><Link to="/Comics">Comics</Link></li>
                    <li><Link to="/Contactos">Contactos</Link></li>
                </ul>

            </div>
        </nav>
    );
}
export default Nav;