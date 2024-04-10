import './App.css'
import Banner from './Componentes/Banner/Header/Banner'
import Main from './Componentes/Banner/Main/Main';
import Footer1 from './Componentes/Banner/Footer/footer1';
import { Outlet } from 'react-router-dom';



function App() {
  

  return (
    <>
      <Banner/>
      <Outlet/>
      <Footer1/>
      
    </>
  )
}

export default App
