
import imgYoutube from "../IMAGEM/YouTube.png";
import imgInstagram from "../IMAGEM/Instagram.png";
import imgTikTOk from "../IMAGEM/TikTOk.png";
import imgFAcebook from "../IMAGEM/FAcebook.png"

function cards(){
        return(
            <div className="container">
          <div className="card pink">
            <div className="PosicaoDaImagem">
            <h1>01</h1>
            <img src={imgYoutube} />
            </div>
            <h3>Youtube</h3>
            <p>
              Produza conteúdo cativante e conquiste seu público com vídeos de
              alta qualidade no maior palco digital do mundo..
            </p>
          </div>
          <div className="card yellow">
            <div className="PosicaoDaImagem">
            <h1>02</h1>
            <img  src={imgTikTOk} />
            </div>
            <h3>Tiktok</h3>
            <p>
              Faça sua criatividade brilhar em vídeos curtos e envolventes que
              vão cativar a comunidade global do TikTok.
            </p>
          </div>
          <div className="card lightblue">
            <div  className="PosicaoDaImagem">
            <h1>03</h1>
            <img  src={imgFAcebook} />
            </div>
            <h3>Facebook</h3>
            <p>
              Conecte-se com sua audiência de forma autêntica e impactante
              através de vídeos que se destacam no feed do Facebook
            </p>
          </div>
          <div className="card navy">
          <div  className="PosicaoDaImagem">
          <h1>04</h1>
            <img  src={imgInstagram} />
          </div>
            <h3>Instagram</h3>
            <p>
              Compartilhe suas histórias de maneira única e conquiste milhões de
              likes no Instagram utilizando Stories e Reels.
            </p>
          </div>
        </div>
        )
}


export default cards;
