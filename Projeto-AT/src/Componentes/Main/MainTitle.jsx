import imgSkate from "../IMAGEM/Skate.jpg";
import Botao from "../Main/Botão";
import Card from "../Main/cards"

function Main() {
  return (
    <main>
      <div className="MAIN">
        <div className="Main2">
          <div className="TITLE">
            <h1>Crie seus vídeos online</h1>
            <p>
              Transforme suas ideias em filmes <br /> memoráveis: onde a
              criatividade encontra a simplicidade
            </p>

            <Botao />
          </div>

          <div className="IMAGEM">
            <img src={imgSkate} />
          </div>
        </div>
        <Card></Card>
      </div>
    </main>
  );
}

export default Main;
