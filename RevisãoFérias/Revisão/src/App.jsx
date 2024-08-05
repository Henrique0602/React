import { useState } from 'react'
import './App.css'

function App() {

const [contador, setContador] = useState(0)
  
function handleClick(){
  setContador(()=>(
    contador + 1
  ))
  console.log(contador)
}
function handleClick2(){
  setContador(()=>(
    contador - 1
  ))
  console.log(contador)

}
  return (
    <>
        <p>{contador}</p>
        <button onClick={handleClick}>Aumentar</button>
        <button onClick={handleClick2}>Diminuir </button>
    </>
  )
}

export default App
