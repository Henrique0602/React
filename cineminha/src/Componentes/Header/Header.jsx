import NavBar from "../NavBar/NavBar";

function Header() {
    return ( 
        <header  className="flex justify-around bg-black text-white font-bold p-4 ">
            <span>Olá, vesitante!</span>
            <h1>Bem-vindo ao CineMagia</h1>
            <NavBar/>
        </header>
     );
}
export default Header;