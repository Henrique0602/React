import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Sobre from './PAGES/Sobre.jsx'
import PageNotFound from './PAGES/PageNotFound.jsx'
import Main from './Componentes/Main/MainTitle.jsx'
import Contato from './PAGES/Contato.jsx'
import Cards from './Componentes/Main/cards.jsx'
import Botao from './Componentes/Main/Botão.jsx'


const router = createBrowserRouter([
  {
    path : '/',
    element: <App/>,
    children:[
        {index : true, element : <Main/>},
        {index : true, element : <Cards/>},
        {index : true, element : <Botao/>},
        {path : 'sobre', element: <Sobre/>},
        {path : 'contato', element: <Contato/>},
        {path : '*', element: <PageNotFound/>},

    ]

    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
