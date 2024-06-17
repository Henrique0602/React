import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";


function PaginaFilmes(){

    const {id} = useParams();
    const [filme, setFilme] = useState([])

    const apiKey='api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const urlImg = 'https://image.tmdb.org/t/p/w780/'

    useEffect( () => {
        fetch(`${urlBase}${id}?${apiKey}`)
        .then(response => response.json())
        .then(response => setFilme(response))
        .catch(error => console.log(error))
    },[])

    
    return (
        
       <body className="bg-black w-screen h-screen p-10     ">
        <img src={`${urlImg}${filme.backdrop_path}`}/>
         <h1 className="text-white">{filme.title}</h1>  
         <p  className="text-white">{filme.overview}</p>
       </body>

       
       
    
  


    )
}

export default PaginaFilmes