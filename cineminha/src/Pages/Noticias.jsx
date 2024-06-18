import data from "../../article.json"

function Noticias() {
    return ( 
        <main className="bg-black">
            
            {data.map(
                    filme => (
                     <div className="card mx-5 gap-3" key={filme.title}>
                           <h1 className="bg-black text-white flex justify-center border-solid border-2 border-red-600 rounded-lg p-5  mb-10">{filme.title}</h1>

                           {filme.image ?
                           <img className="w-[250px] flex justify-center items-center m-10 rounded-lg mb-15 mt-10  " src={filme.image} alt={filme.title} />:
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
                 
                )
                )
                }
          
           
               
        </main>
     );
}
export default Noticias;