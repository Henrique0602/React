import { Link } from "react-router-dom";

function NavBar() {
    return ( 

    <nav>
        <ul className='flex gap-4 ml-3 text-colorTxt font-bold'>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "filmes">Filmes</Link></li>
            <li><Link to = "sobre">Sobre</Link></li>
            <li><Link to = "contato">Contato</Link></li>
        </ul>
    </nav>
        
     );
}

export default NavBar;