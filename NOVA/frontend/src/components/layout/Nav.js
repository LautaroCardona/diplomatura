import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav >
            <div>
                <ul>
                    <li><Link to="/">Index</Link></li>
                    <li><Link to="/">Comics</Link></li>
                    <li><Link to="/">Literatura</Link></li>
                    <li><Link to="/">Peliculas</Link></li>
                </ul>

            </div>
        </nav>
    );
}
export default Nav;