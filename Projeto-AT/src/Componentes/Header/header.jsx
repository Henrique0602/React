import {Link } from "react-router-dom"


function Header(){
    return(

    <header>
        <nav>
           <a className="active"><Link to ="/">Home</Link></a>
           <a><Link to ="sobre">Sobre</Link></a>
           <a><Link to ="contato">Contato</Link></a>
        </nav>
    </header>


        
    )
}

export default Header