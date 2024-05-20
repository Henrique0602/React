import NavBar from "../NavBar/NavBar";

function Header() {
    return ( 
        <header  className="flex justify-around bg-primary-raul text-white font-bold p-4">
            <span>Olá, vesitante!</span>
            <h1>Bem-vindo ao MoviApp</h1>
            <NavBar/>
        </header>
     );
}
export default Header;