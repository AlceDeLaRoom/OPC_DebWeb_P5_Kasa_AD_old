import logo from "../assets/banner_logo_desktop.png"
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


function Footer() {
  const location = useLocation();
  console.log(location.pathname);
  const accueil = location.pathname == "/" ? "active" : "inactive";
  const about = location.pathname == "/A-propos" ? "active" : "inactive";

  return (
    <header>
        <Link  to="/" className={accueil}>
          <img src={logo} alt='logo du site'/>
        </Link>
        <nav>
            <Link  to="/" className={accueil}>Accueil</Link>
            <Link  to="/A-propos" className={about}>A propos</Link>
        </nav>
    </header>
   
  );
}

export default Footer