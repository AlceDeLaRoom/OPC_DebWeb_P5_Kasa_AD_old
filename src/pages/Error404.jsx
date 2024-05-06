import { Link } from 'react-router-dom'

function Error404() {
    return (
        <main className="error404">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d'acceuil</Link>
        </main>
    );
}

export default Error404;
