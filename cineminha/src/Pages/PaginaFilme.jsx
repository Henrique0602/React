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
        
       <body className="bg-black w-screen h-screen p-10">
        <img  className = "w-98 flex justify-center items-center ml-10 border-solid border-2 border-white rounded-3xl " src={`${urlImg}${filme.backdrop_path}`}/>
         <h1 className="text-white text-lg border-solid border-2 border-red-600 rounded-lg p-3 mt-10 mb-5  ">{filme.title}</h1>  
         <p  className="text-white text-lg border-solid border-2 border-red-600 rounded-lg p-2 ">{filme.overview}</p>
       </body>

       
       
    
  


    )
}

export default PaginaFilmes