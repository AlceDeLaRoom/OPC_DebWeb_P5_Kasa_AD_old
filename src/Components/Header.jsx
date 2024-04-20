import '../styles/Header.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <header>
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/A-propos">A propos</Link>
        </nav>
    </header>
   
  );
}

export default Footer