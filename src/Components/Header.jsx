import logo from "../assets/banner_logo_desktop.png"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <header>
        <img src={logo} alt='logo du site'/>
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/A-propos">A propos</Link>
        </nav>
    </header>
   
  );
}

export default Footer