import { useState, useEffect } from "react";
import {Link} from "react-router-dom"



function Filmes() {

    const [filmes, setFilmes] = useState([])

    const apiKey='api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const urlImg = 'https://image.tmdb.org/t/p/w780/'
    

    useEffect( () => {
        fetch(`${urlBase}popular?${apiKey}`)
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch(erro => console.log(erro))
    },[])

    

    return ( 

        <>
   
         <div className="listaFilmes bg-black text-white flex flex-row gap-3 ">
            {
                filmes.map(filme => (
                    <div className="card-filme m-10" key={filme.id}>
                        <h1 className="flex justify-center items-center rounded-lg border-solid border-2 border-red-600 w-50 mb-5 p-3" >{filme.title}</h1>
                        <img className="flex justify-center items-center" src={`${urlImg}${filme.poster_path}`}/>
                        <p className="rounded-lg border-solid border-2 border-white mb-10 mt-5 p-3 text-justify">{filme.overview}</p>
                    <Link className="bg-red-600 w-10 " to ={`${filme.id}`}>Saber Mais</Link>

                        
                    </div>
                    
                ))
            }
         </div>
        </>
       
    );
}
export default Filmes;