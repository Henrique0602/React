import Pessoa from "../IMAGEM/undraw_Mobile_feed_re_72ta 1.png"


function App() {
  return (
    <div className="containerCards">
        <div className="Texto">
            <div className="titulo">
                <h1>Planos</h1>
            </div>
            <div className="cartas">
                    <div className="cardCards2">
                    <div className="card-header-blue"><p>Individual</p></div>
                    <div className="card-main">
                        <h3 className="h3card">1 usuario</h3>
                    <select className="checkbox">
                        <option value="plano1">10 vídeos <strong>R$40</strong></option>
                        <option value="plano2">20 vídeos <strong>R$50</strong></option>
                        <option value="plano3">30 vídeos <strong>R$50</strong></option>
                        <option value="plano4">40 vídeos <strong>R$60</strong></option>
                        <option value="plano5">50 vídeos <strong>R$70</strong></option>
                    </select>
                    </div>
                    <div className="card-footer">
                    <button className="btnCadastrarIndividual">Cadastrar</button>
                    </div>
                </div>

                <div className="cardCards2">
                    <div className="card-header-white"><p>Profissional - times</p></div>
                    <div className="linhaHorizontal"></div>
                    <div className="card-main">
                    <h3 className="h3card">1 - 10 usuario</h3>
                    <select className="checkbox">
                        <option value="1-10">Vídeos Ilimitados <strong>R$40</strong></option>
                    </select>
                    <h3 className="h3card">+ 10 usuario</h3>
                    <select className="checkbox">
                        <option value="1-10">Vídeos Ilimitados <strong>R$20</strong></option>
                       
                    </select>
                    </div>
                    <div className="card-footer">
                    <button className="btnCadastrar">Cadastrar</button>
                    </div>
                </div>

                <div className="cardCards2">
                    <div className="card-header-white"><p>Corporativo</p></div>
                    <div className="linhaHorizontal"></div>
                    <div className="card-main">
                    <img src={Pessoa} width="150" />
                    </div>
                    <div className="card-footer">
                    <button className="btnCadastrar">Entre em contato</button>
                    </div>
                </div>
                </div>
            </div>

        </div>
        
  );
}

export default App;