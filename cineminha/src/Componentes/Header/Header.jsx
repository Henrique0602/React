import NavBar from "../NavBar/NavBar";

function Header() {
    return ( 
        <header>
            <span className="flex jus">Olá, vesitante!</span>
            <h1>Bem-vindo ao MoviApp</h1>
            <NavBar/>
        </header>
     );
}
export default Header;