import React from 'react';
import Image from './assets/img/databases2.jpg';
import ImageGLobo from './assets/img/globo.png';
import ImageGLobo2 from './assets/img/globo2.png';
import ImageJava from './assets/img/logo-java-blue.png';
import ImageNodejs from './assets/img/logo-nodejs.jpg';
import ImagePHP from './assets/img/logo-php.jpeg';
import ImageReact from './assets/img/logo-react.png';
import ImageHtml5 from './assets/img/logo-html6.png';
import ImageForumVivaoLinux from './assets/img/foruns/logo-vivaolinux.png';
import ImageForumStackOverflow from './assets/img/foruns/logo-stackoverflow.png';
import ImageForumWikipedia from './assets/img/foruns/logo-wikipedia.png';
import logo from './assets/img/logo_azul_icon.png';

import profile from './assets/img/0.jpeg';
import './Main.css';

function Main() {
  return (
    <>
      <header>
        <div className="logo">
          <img  src={logo}/>
          Voyager
        </div>
        <nav role="navigation" aria-label="Main">
          <div role="itemmenu">
            <a href="#" >Home</a>
          </div>
          <div role="itemmenu">
            <a href="#">Blog</a>
          </div>
          <div role="itemmenu">
            <a href="#" className="button">Login</a>
          </div>
        </nav>
      </header>
      <div className="chatbot">
            Chat
      </div>
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
      <div role="main">
        <section> 
            <article>
              <h3> Áreas </h3>
                <div className="container-atribuicoes">
                  
                  <div className="conteiner-atribuicoes-item">
                    
                    <img src={ImageGLobo2} />
                    
                    Developer Web Full Stack
                  
                  </div>

                  <div className="conteiner-atribuicoes-item">
                    
                    <img src={ImageGLobo} />
                    
                    DevOps
                  
                  </div>

                  <div className="conteiner-atribuicoes-item">
                    
                    <img src={Image} />
                    
                    Linux 
                  
                  </div>
                  
                  
               </div>
            </article>
         </section>
         <section className="section-descricao" style={{'marginTop':'70px'}}>
            <div  className="border-vertical-top"></div>
            <div  className="section-descricao-conteudo">
                 <div className="section-descricao-conteudo-text">
                        <p>A primeira coisa que eu gostaria de dizer é ‘muito obrigado’. Aos meus professores do stackoverfow, Mozilla(Mdn), w3schools, CISCO e 
                        a uns velhos amigos como Edsger Dijkstra, Richard Matthew Stallman e linus que permitiram ferramentas como Gimp e meu amado Debian e Manjaro existirém.
                        Bem esse site e o blog em anexo contém a essencia da minha personalidade e de uma boa e consagrada serie chamada Star trek: Voyager que
                        ilustra a vida de trabalho nesse seculo, um grupo de pessoas sozinhas longe de casa(Escola) fazendo aliados e infelizmente inimigos também enquanto
                        continuam sua jornada de descobertas pessoais e ciêntificas(No meu caso TI). </p>
                 </div>
                 <div className="section-descricao-conteudo-image">
                        <img src={profile}/>
                 </div>
            </div>
         </section>
         <section className="section-mobile" >
            
            <div className="section-mobile-text">
                  <p> Tecnico de Redes de computadores , apreendi as nuansias dos Windows Servers e Servições de rede , mas me especializei 
                  no desenvolvimento no curso de tecnico de informatica do SENAI e no bacharel de Ciência da computação da faculdade impacta
                  aonde aprendi e continuo aprendendo sobre o desenvolvimentod e aplicações Web em Java, Nodejs e PHP.</p>
                  <p> Além disso possuo o conhecimento para criação de aplicações mobile em Java, React Native e Kotlin(Basico).
                   Atualmente estou me focando em python para A.I. e com mais energia firmwares e Sistemas Operacionais.</p>
                   
            </div>
            
         </section>
         <section className="section-foruns-project">
            <h3>Acompanhe as minhas contribuições :</h3>
            <div className="section-foruns">
              <div className="section-foruns-item">
                  <a href="#">
                     <img src={ImageForumVivaoLinux}/>
                  </a>
              </div>
              <div className="section-foruns-item">
                  <a href="https://stackoverflow.com/users/12253435/gil?tab=profile">
                    <img src={ImageForumStackOverflow}/>
                  </a>
              </div>
              <div className="section-foruns-item">
                  <a href="https://pt.wikipedia.org/wiki/Especial:Contribui%C3%A7%C3%B5es/Tel_front">
                     <img src={ImageForumWikipedia} />
                  </a>
              </div>
            </div>
            <h3>Acompanhe os meus projetos :</h3>
            <div className="section-project">
                  dsadsadasd
            </div>
         </section>
      </div>
      <footer>
            
            FOOTER
            
      </footer>

    </>
  );
}

export default Main;
