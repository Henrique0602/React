import './App.css'
import Header from'./Componentes/Header/header'
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Header/>
      <Outlet/>
     

    </>
  )
}

export default App
