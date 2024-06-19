import { useState, useEffect } from "react";
import { Link } from "react-router-dom"



function Filmes() {

    const [filmes, setFilmes] = useState([])
    const apiKey = 'api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const urlImg = 'https://image.tmdb.org/t/p/w780/'


    useEffect(() => {
        fetch(`${urlBase}popular?${apiKey}`)
            .then(response => response.json())
            .then(response => setFilmes(response.results))
            .catch(erro => console.log(erro))
    }, [])



    return (

        <>
            <div className="listaFilmes bg-black text-white flex flex-col gap-4">
                {filmes.map((filme) => (
                    <div className="card-filme m-10 flex" key={filme.id}>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="rounded-lg border-solid border-2 border-red-600 w-80 mb-5 p-3 text-center">{filme.title}</h1>
                            <img className="w-32" src={`${urlImg}${filme.poster_path}`} alt={filme.title} />
                        </div>
                        <div className="flex flex-col ml-5 justify-center items-center"> 
                            <p className="rounded-lg border-solid border-2 border-white mb-5 p-3 text-justify w-10/12">{filme.overview}</p>
                            <button className="bg-red-800 w-40 h-10 rounded-xl ">
                                <Link to={`${filme.id}`}>Saber Mais</Link>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>

    );
}
export default Filmes;