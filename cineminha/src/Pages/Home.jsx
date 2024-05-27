import data from "../../article.json"

function Home() {
    console.log(data)
    return ( 
        <main>
            <input type="text" name="busca" id="busca" placeholder="Digite aqui sua busca" />
            <div className="grid grid-cols-3 gap-4">

            {data.map(
                    filme => (
                     <div className="card" key={filme.title}>
                           <h1 className="bg-black text-white flex justify-center">{filme.title}</h1>

                           {filme.image ?
                           <img className="w-10 flex justify-center m-10" src={filme.image} alt={filme.title} />:
                           "Não tem imagem"}

                           <div className="text bg-slate-600 text-white">
                               {filme.text.map(text => (
                                <span key={text}> {text}</span>
                               ))}
                           </div>

                           <div className="tag bg-red-600 text-white flex justify-center" >
                               {filme.tags.map(tag => (
                                <span key={tag}> {tag}</span>
                               ))}
                           </div>
                       
                        
                     </div>   
                 
                )
                )
                }
          
            </div>
           
               
        </main>
     );
}
export default Home;

