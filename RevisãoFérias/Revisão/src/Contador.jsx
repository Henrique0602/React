import { useState } from 'react'

export default function Contador(){
    const [contador, setContador] = useState("Rebeca")
  

    function handleClick2(){
      setContador( contador === "Rebeca" ? "Ouro" : "Rebeca")
      console.log(contador)
    
    }

    return(
       
        <>
         <p>{contador}</p>
        
            <button onClick={handleClick2}>{contador} </button>
          
        </>
               
    )
}