import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return ( 
        <nav className="navbar navbar-expand-lg bg-dark py-4 ">
           <Link to="/" className="navbar-brand ms-5 nav-brand">contact app</Link>
        </nav>
     );
}
 
export default Header;