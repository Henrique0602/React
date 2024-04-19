import Pessoa from "../IMAGEM/undraw_Mobile_feed_re_72ta 1.png"


function App() {
  return (
    <div className="containerCards">
        <div className="Texto">
            <div className="titulo">
                <h1>planos</h1>
            </div>
            <div className="cartas">
                    <div className="cardCards2">
                    <div className="card-header blue"><p>Individual</p></div>
                    <div className="card-main">
                        <h3 className="h3card">1 usuario</h3>
                    <select className="checkbox">
                        <option value="plano1">Plano 1</option>
                        <option value="plano2">Plano 2</option>
                        <option value="plano3">Plano 3</option>
                        <option value="plano4">Plano 4</option>
                        <option value="plano5">Plano 5</option>
                    </select>
                    </div>
                    <div className="card-footer">
                    <button className="btnCadastrar">Cadastrar</button>
                    </div>
                </div>

                <div className="cardCards2">
                    <div className="card-header white">Profissional - times</div>
                    <div className="card-main">
                    <h3 className="h3card">1 - 10 usuario</h3>
                    <select className="checkbox">
                        <option value="1-10">1 - 10 usuários</option>
                        <option value="11-20">11 - 20 usuários</option>
                        <option value="21-30">21 - 30 usuários</option>
                    </select>
                    <h3 className="h3card">+ 10 usuario</h3>
                    <select className="checkbox">
                        <option value="1-10">1 - 10 usuários</option>
                        <option value="11-20">11 - 20 usuários</option>
                        <option value="21-30">21 - 30 usuários</option>
                    </select>
                    </div>
                    <div className="card-footer">
                    <button className="btnCadastrar">Cadastrar</button>
                    </div>
                </div>

                <div className="cardCards2">
                    <div className="card-header white">Corporativo</div>
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