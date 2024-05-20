import { Link } from "react-router-dom";
function NavBar() {
    return ( 

        <nav>
            <ul className="flex gap-4">
                <li><Link to ="/"></Link>Home</li>
                <li ><Link to ="filmes"></Link>Filmes</li>
                <li ><Link to ="sobre"></Link>Sobre</li>
                <li ><Link to ="contato"></Link>Contato</li>
            </ul>
        </nav>
        
     );
}

export default NavBar;