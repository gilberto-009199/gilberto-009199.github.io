import React,{Component} from 'react';
import ImageJava from './assets/img/logo-java-blue.png';
import ImageNodejs from './assets/img/logo-nodejs.jpg';
import ImagePHP from './assets/img/logo-php.jpeg';
import ImageReact from './assets/img/logo-react.png';
import ImageHtml5 from './assets/img/logo-html6.png';


class Banner extends Component{
    
    render(){
        return(
            <>
                <div role="banner">
                  <div className="banner-imagem-cortada">
                  </div>
                  <div className="banner-painel">
                      <div className="banner-painel-triangulo"></div>
                      <div className="banner-painel-conteudo"> 

                            <div className="banner-painel-conteudo-imagens">
                                  <div className="banner-painel-conteudo-imagens-item">
                                        <img src={ImageJava} /> 
                                  </div>
                                  <div className="banner-painel-conteudo-imagens-item">
                                        <img src={ImageNodejs} />
                                  </div>
                                  <div className="banner-painel-conteudo-imagens-item">
                                        <img src={ImagePHP} />
                                  </div>
                                  <div className="banner-painel-conteudo-imagens-item">
                                        <img src={ImageReact} />
                                  </div>
                                  <div className="banner-painel-conteudo-imagens-item">
                                        <img src={ImageHtml5} />
                                  </div>
                            </div>
                            <a className="btn-light" href="mailto:gilberto.tec@vivaldi.net">
                                Entrar em contato
                            </a>
                      </div>
                  </div>
                </div>
            </>
        )
    }
    
}

export default Banner;