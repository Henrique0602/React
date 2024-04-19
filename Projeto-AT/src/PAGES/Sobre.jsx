import TelaFrente from "../PAGES/Imagens/Viseo Merge screen 1.png";
import TelaSeguranca from "../PAGES/Imagens/Saved 1.png";
import Botao from "../Componentes/Botao/button";
import Cards from "../Componentes/Main/Cards2"


export default function Sobre(){

    return(
        <main>
        <div className="MAIN">
          <div className="Main2">
            <div className="TITLE">
              <h1>Bem-vindo à <br></br>revolução dos <br></br>vídeos!</h1>
              <p>
                Somos uma startup com o objetivo de facilitar<br></br> a produção de conteúdo em larga escala com <br></br>qualidade profissional, capaz de atingir uma <br></br>audiência de milhões de seguidores.
              </p>

            <Botao/>
            </div>
  
            <div className="IMAGEM">
              <img className="imagemcell1" src={TelaFrente} />
              <img className="imagemcell2" src={TelaSeguranca} />

            </div>
          </div>
          <Cards/>
        </div>
      </main>
    )
}