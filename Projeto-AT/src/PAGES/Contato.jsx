import Instagram from "../PAGES/Imagens/Insta.png";
import Discord from "../PAGES/Imagens/Discord.png";
import Twitter from "../PAGES/Imagens/twitter.png";



export default function Corpo(){
    return(
        <main>
            <div className="mainContato">
                <div className="formaContato">
                    <h2>Dúvidas e <br></br>suporte, entre<br></br>em contato:</h2>
                    <div className="imagens">
                        <div className="imagem">
                            <img src={Twitter} alt="twitter" width={40} height={40}/>
                        </div>
                        <div className="imagem">
                            <img src={Instagram} alt="instagram" width={40} height={40} />
                        </div>
                        <div className='imagem'>
                            <img src={Discord} alt="discord" width={40} height={40} />
                        </div>
                    </div>
                </div>
                <div className="linha"></div>
                <div className="mainInfo">
                    <section id="contatoEmail">
                        <form>
                            <div className="caixas">
                                <div className="Nome">
                                    <label htmlFor="nome">Nome:</label>
                                    <input type="text" className="texto"></input>
                                </div>
                                <div className="Email">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" className="texto"></input>
                                </div>
                                <div className="Mensagem">
                                    <label htmlFor="email">Mensagem:</label>
                                    <input type="text" className="caixaMensagem"></input>
                                </div>
                            </div>
                            <div className="botao">
                                <button type="submit">Enviar</button>
                            </div>
                           
                        </form>
                    </section>
                </div>
            </div>
        </main>
    )
}