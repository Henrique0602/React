import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { FaCheck } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";
import data from "../../article.json"



function Filmes() {

    const [filmes, setFilmes] = useState([])
    const apiKey = 'api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const urlImg = 'https://image.tmdb.org/t/p/w780/'


    useEffect(() => {
        fetch(`${urlBase}popular?${apiKey}`)
            .then(response => response.json())
            .then(response => 
                {
                    setFilmes(response.results)
                    setartigos(response.results)
                })
            .catch(erro => console.log(erro))
    }, [])


    const [searchInput, setsearchInput] = useState('')
    const [artigos, setartigos] = useState(filmes)

    const handleInputChange = e => {

        const searchTerm = e.target.value
        setsearchInput(searchTerm)

        const resultados = filmes.filter((search) => (
            search.title.toLowerCase().includes(searchTerm.toLowerCase())
        ))

        setartigos(resultados)
    }




    return (


        <>

            <div className="flex justify-center ">
                <input className=" w-80 h-12 rounded-lg mt-10 p-5 border-solid border-2 border-white bg-black text-white" type="text" name="busca" id="busca" placeholder="Digite aqui sua busca" value={searchInput} onChange={handleInputChange} />
            </div>

            <div className="listaFilmes bg-black text-white flex flex-row gap-4">
                <div className="grid grid-cols-3 gap-4 ">
                {
                    artigos.length>0?
                    artigos.map((filme) => (
                        <div className="card-filme m-10 flex flex-col bg-gray-800 p-5 rounded-lg mx-5 gap-3" key={filme.id}>

                            <div className="flex flex-col justify-center items-center">
                                <h1 className="rounded-lg border-solid border-2 border-red-600 w-80 mb-5 p-3 text-center">{filme.title}</h1>
                                <img className="w-[250px] flex justify-center items-center m-10 rounded-lg ml-16 mb-14 mt-10" src={`${urlImg}${filme.poster_path}`} alt={filme.title} />
                            </div>
                            <div className="flex flex-col ml-5 justify-center items-center">
                                <p className="rounded-lg border-solid border-2 border-white mb-5 p-3 text-justify w-10/12">{filme.overview}</p>
                                <button className="bg-red-800 w-40 h-10 rounded-xl ">
                                    <Link to={`${filme.id}`}>Saber Mais</Link>
                                </button>

                            </div>
                            <FaCheck className="text-white mt-5 text-2xl cursor-pointer hover:text-green-500 transition-colors flex justify-end" />
                            <FaRegTimesCircle className="text-white mt-5 text-2xl cursor-pointer hover:text-red-500 transition-colors flex justify-end" />
                        </div>

                    ))
                    :<div className="flex justify-center items-center"> <p className="text-white flex justify-center items-center text-3xl p-10">Não foi encontrado nada!!!</p></div>
                   
                }
                </div>
            </div>

        </>

    );
}
export default Filmes;