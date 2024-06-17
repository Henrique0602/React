import NavBar from "../NavBar/NavBar";

function Header() {
    return ( 
        <header  className="flex justify-around bg-black text-white font-bold p-4 ">
            <span>CineMagia</span>
            <NavBar/>
        </header>
     );
}
export default Header;