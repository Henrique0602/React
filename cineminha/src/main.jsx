import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Filmes from './Pages/Filmes.jsx'
import PageNotFound from './Pages/PageNotFound.jsx'
import Home from './Pages/Home.jsx'
import PaginaFilmes from './Pages/PaginaFilme.jsx'
import Contato from './Pages/Contatos.jsx'


const router = createBrowserRouter(
  [
    {
      path : "/",
      element : <App/>,
      children : [
        {index: true, element: <Home/> },
        {path : "filmes" , element : <Filmes/>},
        {path : "filmes/:id" , element : <PaginaFilmes/>},
        {path : "contato" , element: <Contato/>},
        {path : "*" , element : <PageNotFound/>}

      ]
    }
   ]
)
  



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
