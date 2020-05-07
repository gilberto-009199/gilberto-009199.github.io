import React,{Component} from 'react';

import Image from './assets/img/databases2.jpg';
import ImageGLobo from './assets/img/globo.png';
import ImageGLobo2 from './assets/img/globo2.png';

import ImageForumVivaoLinux from './assets/img/foruns/logo-vivaolinux.png';
import ImageForumStackOverflow from './assets/img/foruns/logo-stackoverflow.png';
import ImageForumWikipedia from './assets/img/foruns/logo-wikipedia.png';
import profile from './assets/img/0.jpeg';

import Menu from './Menu';
import Banner from './Banner';

import './style.css';

class Main extends Component{
    render(){
        return(
            <>
            <Menu />
            <Banner />
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
                        <div className="ProjectBox">
                            <div className="itemprojeto">
                                <div className="img">
                                    <svg class="heading-icon">
                                      <circle fill="#B9F4BC" cx="33" cy="33" r="33"/>
                                      <path d="M38.4 15l1-3h1l1.2 3c.2.2.5.2.7.3l2.2-2.5 1 .4-.2 3.3c.2 0 .3.2.5.4l3-1.5.7.7-1.4 3 .5.5h3.3l.4.8-2.5 2.2c0 .2 0 .5.2.7l3 1v1l-3 1.2-.3.8 2.5 2-.4 1-3.3-.2-.4.7 1.5 2.8-.7.7-3-1.4c0 .2-.4.4-.6.5l.2 3.3-1 .4-2-2.5c-.3 0-.6 0-1 .2l-1 3h-1l-1-3c-.2-.2-.5-.2-.8-.3l-2 2.5-1-.4.2-3.3-.7-.4-2.8 1.5-.7-.7 1.4-3c-.2 0-.4-.4-.5-.6l-3.3.2-.4-1 2.5-2c0-.3 0-.6-.2-1l-3-1v-1l3-1c.2-.2.2-.4.3-.7l-2.5-2.2.4-1 3.3.2c0-.2.2-.3.4-.5l-1.5-3 .7-.7 3 1.4.5-.5v-3.3l.8-.4 2.2 2.5s.5 0 .7-.2z" fill="#6ED69A"/>
                                      <circle fill="#B9F4BC" cx="40" cy="25" r="2"/>
                                      <path d="M21.6 26.8L19 25l-1.3 1 1.4 3c0 .2-.3.4-.5.6l-3-.8-1 1.4 2.4 2.3-.4.8-3.2.3-.3 1.6 3 1.4v.8l-3 1.4.4 1.6 3.2.3c0 .3.2.5.3.8l-2.4 2.3.8 1.4 3-.8.7.6-1.3 3 1.3 1 2.6-1.8c.3 0 .5.3.8.4l-.3 3.2 1.6.6 2-2.7c.2 0 .5 0 .7.2l1 3h1.5l1-3c0-.2.4-.2.7-.3l2 2.7 1.4-.6-.4-3.2c.3 0 .5-.3.8-.4L37 49l1.3-1-1.4-3c0-.2.3-.4.5-.6l3 .8 1-1.4-2.4-2.3.4-.8 3.2-.3.3-1.6-3-1.4v-.8l3-1.4-.4-1.6-3.2-.3c0-.3-.2-.5-.3-.8l2.4-2.3-.8-1.4-3 .8-.7-.6 1.3-3-1.3-1-2.6 1.8c-.3 0-.5-.3-.8-.4l.3-3.2-1.6-.6-2 2.7c-.2 0-.5 0-.7-.2l-1-3h-1.5l-1 3c0 .2-.4.2-.7.3l-2-2.7-1.4.6.4 3.2c-.3 0-.5.3-.8.4z" fill="#1BB978"/>
                                      <circle fill="#B9F4BC" cx="28" cy="37" r="3"/>
                                    </svg>
                                </div>
                                <div className="desc">
                                    Dercrição
                                </div>
                            </div>
                            <div className="itemprojeto">
                                <div className="img">
                                    Imagem
                                </div>
                                <div className="desc">
                                    Dercrição
                                </div>
                            </div>
                            <div className="itemprojeto">
                                <div>
                                    Imagem
                                </div>
                                <div>
                                    Dercrição
                                </div>
                            </div>
                            <div className="itemprojeto">
                                <div className="img">
                                    Imagem
                                </div>
                                <div className="desc">
                                    Dercrição
                                </div>
                            </div>
                        </div>
                  </div>
               </section>
            </div>
           </>
        )
    }
}

export default Main;