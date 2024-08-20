import data from "../../article.json"
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";




function Home() {

    const[searchInput, setsearchInput] = useState('')
    const[artigos, setartigos] = useState(data)
    
    const handleInputChange = e => {

        const searchTerm = e.target.value
        setsearchInput(searchTerm)
        
        const resultados = data.filter ( (search) => (
            search.title.toLowerCase().includes(searchTerm.toLowerCase())
        ))
        
        setartigos(resultados)
    }

    return (
        <main className="bg-black">
            <div className="flex justify-center ">
                <input className=" w-80 h-12 rounded-lg mt-10 p-5 border-solid border-2 border-white bg-black text-white" type="text" name="busca" id="busca" placeholder="Digite aqui sua busca"  value={searchInput} onChange={handleInputChange} />
            </div>
            <h1 className="text-white font-bold text-2xl flex justify-center mb-10 mt-20 ">Não fique por fora. Saiba de tudo!!</h1>

            <div className="grid grid-cols-3 gap-4">


                {
                 artigos.length>0?

                artigos.map(
                    filme => (
                        <div className="card bg-gray-800 p-5 rounded-lg mx-5 gap-3 ">

                            <div className="card mx-5 gap-3" key={filme.title}>
                                <h1 className="bg-black text-white flex justify-center border-solid border-2 border-white rounded-lg mt-5 ">{filme.title}</h1>

                                {filme.image ?
                                    <img className="w-[250px] flex justify-center items-center m-10 rounded-lg ml-16 mb-14 mt-10  " src={filme.image} alt={filme.title} /> :
                                    "Não tem imagem"}

                                <div className="text bg-black rounded-lg text-white border-solid border-2 p-10 mb-7 text-justify">
                                    {filme.text.map(text => (
                                        <span key={text}> {text}</span>
                                    ))}
                                </div>

                                <div className="tag bg-black rounded-lg text-white flex justify-center border-solid border-2 mt-4" >
                                    {filme.tags.map(tag => (
                                        <span key={tag}> {tag}</span>
                                    ))}
                                </div>

                              



                            </div>
                            <FaRegHeart className="text-white mt-5 text-2xl cursor-pointer hover:text-red-500 transition-colors flex justify-end" />
                        </div>

                    )
                )

                :<p className="text-white">Não foi encontrado nada!!!</p>
                }

            </div>


        </main>
    );
}
export default Home;