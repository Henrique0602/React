import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Sobre from './Pages/Sobre.jsx'
import Servicos from './Pages/Servicos.jsx'
import Contato from './Pages/Contato.jsx'
import PageNotFound from './Pages/PageNotFound.jsx'
import Main from './Componentes/Banner/Main/Main.jsx'


const router = createBrowserRouter([
  {
    path : '/',
    element: <App/>,
    children:[
        {index : true, element : <Main/>},
        {path : 'sobre', element: <Sobre/>},
        {path : 'servicos', element: <Servicos/>},
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
