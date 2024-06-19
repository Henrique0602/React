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

            <div className="listaFilmes bg-black text-white flex flex-col gap-4 ">
                {
                    filmes.map(filme => (
                        <div className="card-filme m-10 " key={filme.id}>
                            <h1 className="flex justify-center items-center rounded-lg border-solid border-2 border-red-600 w-36     mb-5 p-3" >{filme.title}</h1>
                            <img className="flex justify-center items-center  w-32" src={`${urlImg}${filme.poster_path}`} />
                            <p className=" rounded-lg border-solid border-2 border-white mb-10 mt-5 p-3 text-justify w-full ">{filme.overview}</p>
                            <button className="bg-red-800 w-40 h-10 rounded-xl ">
                              <Link to={`${filme.id}`}>Saber Mais</Link>
                            </button>
                          
                        </div>

                    ))
                }
            </div>
        </>

    );
}
export default Filmes;