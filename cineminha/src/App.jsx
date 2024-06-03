import Header from "./Componentes/Header/Header";
import { Outlet } from "react-router-dom"
import Filmes from "./Pages/Filmes";

function App() {
  return (
    <>
      <Header/>
      <Filmes/>
      <Outlet/>
    </>
  )
}
export default App;