/* eslint-disable */
import React, { Component } from 'react';

import Image from './assets/img/databases2.jpg';
import ImageGLobo from './assets/img/globo.png';
import ImageGLobo2 from './assets/img/globo2.png';

import ImageForumVivaoLinux from './assets/img/foruns/logo-vivaolinux.png';
import ImageForumStackOverflow from './assets/img/foruns/logo-stackoverflow.png';
import ImageForumWikipedia from './assets/img/foruns/logo-wikipedia.png';
import profile from './assets/img/0.jpeg';


//Image Projetos
import ImageMiniERP from './assets/img/vsd6inZl.png';
import ImageBugbunny from './assets/img/cDAj2PSl.png';
import ImageMobshare from './assets/img/xMh0NLGl.png';//
import ImageAspenx from './assets/img/aspenx.png';
import ImageAspenFlorest from './assets/img/AspenFlorest.png';
import ImageAgropad from './assets/img/Agropad.png';
import ImageJAgenda from './assets/img/WfA8lYal.png';
import ImageJAcademia from './assets/img/0gh2TEnl.png';
import ImageJAcademiaWeb from './assets/img/OPwuzbbl.png';

import ImageSite from './assets/img/5k2FRkHl.png';
import ImageForca from './assets/img/7SGW7xgl.png';

import Menu from './Menu';
import Banner from './Banner';

import './style.css';
import './Main.css';

class Main extends Component {
   render() {
      return (
         <>
            <Menu />
            <Banner />
            <div role="main">
               <section>
                  <article>
                     <h3> Áreas </h3>
                     <div className="container-atribuicoes">

                        <div className="conteiner-atribuicoes-item">

                           <img alt="Globo" src={ImageGLobo2} />

                           Developer Web Full Stack

                        </div>

                        <div className="conteiner-atribuicoes-item">

                           <img alt="DevOps" src={ImageGLobo} />

                           DevOps

                        </div>

                        <div className="conteiner-atribuicoes-item">

                           <img alt="Linux" src={Image} />

                           Linux

                        </div>


                     </div>
                  </article>
               </section>
               <section className="section-descricao" style={{ 'marginTop': '70px' }}>
                  <div className="border-vertical-top"></div>
                  <div className="section-descricao-conteudo">
                     <div className="section-descricao-conteudo-text">
                        <p>A primeira coisa que eu gostaria de dizer é ‘muito obrigado’. Aos meus professores do stackoverfow, Mozilla(Mdn), w3schools, CISCO e
                           a uns velhos amigos como Edsger Dijkstra, Richard Matthew Stallman e linus que permitiram ferramentas como Gimp e meu amado Debian e Manjaro existirém.
                           Bem esse site e o blog em anexo, contém as bases que eu fui e vou encontrando na minha busca por
                           me tornar um programador melhor. </p>
                     </div>
                     <div className="section-descricao-conteudo-image">
                        <img alt="Imagem do meu rosto" src={profile} />
                     </div>
                  </div>
               </section>
               <section className="section-mobile" >

                  <div className="section-mobile-text">
                     <p> Tecnico de Redes de computadores , apreendi as nuansias dos Windows Servers e Servições de rede , mas me especializei
                        no desenvolvimento no curso de tecnico de informatica do SENAI e no bacharel de Ciência da computação da faculdade impacta
                        aonde aprendi e continuo aprendendo sobre o desenvolvimento de aplicações Web em Java, Nodejs e PHP.</p>
                     <p> Além disso possuo o conhecimento para criação de aplicações mobile em Java, React Native e Kotlin(Basico).
                        Atualmente estou me focando em python para A.I. e com mais energia firmwares e Sistemas Operacionais.</p>

                  </div>

               </section>
               <section className="section-foruns-project">
                  <h3>Acompanhe as minhas contribuições :</h3>
                  <div className="section-foruns">
                     <div className="section-foruns-item">
                        <a href="https://www.vivaolinux.com.br/comunidades/userview.php?login=Vida!=Palco">
                           <img alt="Comunidade VivaoLinux" src={ImageForumVivaoLinux} />
                        </a>
                     </div>
                     <div className="section-foruns-item">
                        <a href="https://stackoverflow.com/users/12253435/gil?tab=profile">
                           <img alt="Comunidade StackOverflow" src={ImageForumStackOverflow} />
                        </a>
                     </div>
                     <div className="section-foruns-item">
                        <a href="https://pt.wikipedia.org/wiki/Especial:Contribui%C3%A7%C3%B5es/Tel_front">
                           <img alt="Comunidade Wikipedia" src={ImageForumWikipedia} />
                        </a>
                     </div>
                  </div>
                  <h3>Acompanhe os meus projetos :</h3>
                  <div className="section-project">
                     <div className="before" />
                     <div className="ProjectBox">
                     <div className="itemprojeto">
                           <a target="_blank" href="https://github.com/gilberto-009199/AspenX" className="btn">GitHub</a>
                           <a target="_blank" href="https://gilberto-009199.github.io/AspenX/" className="btn">Site</a>
                           <div className="img">
                              <img alt="Imagem do projeto" src={ImageAspenx} />
                           </div>
                           <div className="desc">
                              <h4>AspenX</h4>
                              <h5>JavaScript</h5>
                              <div className="progress">
                                 <div className="progress-bar color-1" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}>
                                    <span>70%</span>
                                 </div>
                              </div>
                              <h5>CSS</h5>
                              <div className="progress">
                                 <div className="progress-bar color-2" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "15%" }}>
                                    <span>15%</span>
                                 </div>
                              </div>
                              <h5>SCSS</h5>
                              <div className="progress">
                                 <div className="progress-bar color-3" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "5%" }}>
                                    <span>5%</span>
                                 </div>
                              </div>
                              <h5>HTML</h5>
                              <div className="progress">
                                 <div className="progress-bar color-4" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "10%" }}>
                                    <span>10%</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="itemprojeto">
                           <a target="_blank" href="https://github.com/AspenX-Community/AspenFlorest" className="btn">GitHub</a>
                           <div className="img">
                              <img alt="Imagem do projeto" src={ImageAspenFlorest} />
                           </div>
                           <div className="desc">
                              <h4>AspenFlorest</h4>
                              <h5>Vue</h5>
                              <div className="progress">
                                 <div className="progress-bar color-2" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "40%" }}>
                                    <span>40%</span>
                                 </div>
                              </div>
                              <h5>Nuxt</h5>
                              <div className="progress">
                                 <div className="progress-bar color-4" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "4%" }}>
                                    <span>4%</span>
                                 </div>
                              </div>
                              <h5>JavaScript</h5>
                              <div className="progress">
                                 <div className="progress-bar color-1" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "40%" }}>
                                    <span>40%</span>
                                 </div>
                              </div>
                              <h5>CSS</h5>
                              <div className="progress">
                                 <div className="progress-bar color-3" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "9%" }}>
                                    <span>9%</span>
                                 </div>
                              </div>
                              <h5>HTML</h5>
                              <div className="progress">
                                 <div className="progress-bar color-4" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "4%" }}>
                                    <span>4%</span>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="itemprojeto">
                           <a target="_blank" href="https://www.agropad.com.br/" className="btn">Site</a>
                           <div className="img">
                              <img alt="Imagem do projeto" src={ImageAgropad} />
                           </div>
                           <div className="desc">
                              <h4>Agropad</h4>
                              <h5>Angular</h5>
                              <div className="progress">
                                 <div className="progress-bar color-3" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "40%" }}>
                                    <span>40%</span>
                                 </div>
                              </div>
                              <h5>C#</h5>
                              <div className="progress">
                                 <div className="progress-bar color-4" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "44%" }}>
                                    <span>44%</span>
                                 </div>
                              </div>
                              <h5>CSS</h5>
                              <div className="progress">
                                 <div className="progress-bar color-3" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "9%" }}>
                                    <span>9%</span>
                                 </div>
                              </div>
                              <h5>HTML</h5>
                              <div className="progress">
                                 <div className="progress-bar color-4" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "4%" }}>
                                    <span>4%</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="itemprojeto">
                           <a target="_blank" href="https://github.com/gilberto-009199/Web" className="btn">GitHub</a>
                           <a target="_blank" href="https://mobshare.000webhostapp.com" className="btn">Site</a>
                           <div className="img">
                              <img alt="Imagem do projeto" src={ImageMobshare} />
                           </div>
                           <div className="desc">
                              <h4>Mobshare</h4>
                              <h5>PHP OO</h5>
                              <div className="progress">
                                 <div className="progress-bar color-1" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}>
                                    <span>60%</span>
                                 </div>
                              </div>
                              <h5>Java Android</h5>
                              <div className="progress">
                                 <div className="progress-bar color-2" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "15%" }}>
                                    <span>15%</span>
                                 </div>
                              </div>
                              <h5>Nodejs Api</h5>
                              <div className="progress">
                                 <div className="progress-bar color-3" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "5%" }}>
                                    <span>5%</span>
                                 </div>
                              </div>
                              <h5>Nodejs Electron.js</h5>
                              <div className="progress">
                                 <div className="progress-bar color-4" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "10%" }}>
                                    <span>10%</span>
                                 </div>
                              </div>
                           </div>
                        </div>


                        <div className="itemprojeto">
                           <a target="_blank" href="https://github.com/gilberto-009199/minierp" className="btn">GitHub</a>
                           <a target="_blank" href="https://gitpod.io#github.com/gilberto-009199/minierp" className="btn">Site</a>
                           <div className="img">
                              <img alt="Imagem do projeto" src={ImageMiniERP} />
                           </div>
                           <div className="desc">
                              <h4>MiniERP</h4>
                              <h5>Spring Boot</h5>
                              <div className="progress">
                                 <div className="progress-bar color-1" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }}>
                                    <span>50%</span>
                                 </div>
                              </div>
                              <h5>HTML CSS</h5>
                              <div className="progress">
                                 <div className="progress-bar color-2" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "15%" }}>
                                    <span>15%</span>
                                 </div>
                              </div>
                              <h5>React.js</h5>
                              <div className="progress">
                                 <div className="progress-bar color-3" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "35%" }}>
                                    <span>35%</span>
                                 </div>
                              </div>
                           </div>
                        </div>


                        <div className="itemprojeto">
                           <a target="_blank" href="https://github.com/gilberto-009199/ProjetoSenaiPHP400" className="btn">GitHub</a>
                           <a target="_blank" href="https://bugsbonny.000webhostapp.com/stalls.php" className="btn">Site</a>
                           <div className="img">
                              <img alt="Imagem do projeto" src={ImageBugbunny} />
                           </div>
                           <div className="desc">
                              <h4>BugBunny</h4>
                              <h5>PHP</h5>
                              <div className="progress">
                                 <div className="progress-bar color-1" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}>
                                    <span>70%</span>
                                 </div>
                              </div>
                              <h5>CMS em Vue js</h5>
                              <div className="progress">
                                 <div className="progress-bar color-2" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "15%" }}>
                                    <span>15%</span>
                                 </div>
                              </div>
                              <h5>PHP Api</h5>
                              <div className="progress">
                                 <div className="progress-bar color-3" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "5%" }}>
                                    <span>5%</span>
                                 </div>
                              </div>
                              <h5>Mapas +  Graficos + JQuery</h5>
                              <div className="progress">
                                 <div className="progress-bar color-4" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "10%" }}>
                                    <span>5%</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="itemprojeto">
                           <a target="_blank" href="https://github.com/gilberto-009199/Desktop-1" className="btn">GitHub</a>
                           <a target="_blank" href="https://github.com/pushcodecontato/Desktop/releases/download/0.2/mobshare-win32-ia32.zip" className="btn">Download</a>
                           <div className="img">
                              <svg className="heading-icon">
                                 <circle fill="#B9F4BC" cx="33" cy="33" r="33" />
                                 <path d="M38.4 15l1-3h1l1.2 3c.2.2.5.2.7.3l2.2-2.5 1 .4-.2 3.3c.2 0 .3.2.5.4l3-1.5.7.7-1.4 3 .5.5h3.3l.4.8-2.5 2.2c0 .2 0 .5.2.7l3 1v1l-3 1.2-.3.8 2.5 2-.4 1-3.3-.2-.4.7 1.5 2.8-.7.7-3-1.4c0 .2-.4.4-.6.5l.2 3.3-1 .4-2-2.5c-.3 0-.6 0-1 .2l-1 3h-1l-1-3c-.2-.2-.5-.2-.8-.3l-2 2.5-1-.4.2-3.3-.7-.4-2.8 1.5-.7-.7 1.4-3c-.2 0-.4-.4-.5-.6l-3.3.2-.4-1 2.5-2c0-.3 0-.6-.2-1l-3-1v-1l3-1c.2-.2.2-.4.3-.7l-2.5-2.2.4-1 3.3.2c0-.2.2-.3.4-.5l-1.5-3 .7-.7 3 1.4.5-.5v-3.3l.8-.4 2.2 2.5s.5 0 .7-.2z" fill="#6ED69A" />
                                 <circle fill="#B9F4BC" cx="40" cy="25" r="2" />
                                 <path d="M21.6 26.8L19 25l-1.3 1 1.4 3c0 .2-.3.4-.5.6l-3-.8-1 1.4 2.4 2.3-.4.8-3.2.3-.3 1.6 3 1.4v.8l-3 1.4.4 1.6 3.2.3c0 .3.2.5.3.8l-2.4 2.3.8 1.4 3-.8.7.6-1.3 3 1.3 1 2.6-1.8c.3 0 .5.3.8.4l-.3 3.2 1.6.6 2-2.7c.2 0 .5 0 .7.2l1 3h1.5l1-3c0-.2.4-.2.7-.3l2 2.7 1.4-.6-.4-3.2c.3 0 .5-.3.8-.4L37 49l1.3-1-1.4-3c0-.2.3-.4.5-.6l3 .8 1-1.4-2.4-2.3.4-.8 3.2-.3.3-1.6-3-1.4v-.8l3-1.4-.4-1.6-3.2-.3c0-.3-.2-.5-.3-.8l2.4-2.3-.8-1.4-3 .8-.7-.6 1.3-3-1.3-1-2.6 1.8c-.3 0-.5-.3-.8-.4l.3-3.2-1.6-.6-2 2.7c-.2 0-.5 0-.7-.2l-1-3h-1.5l-1 3c0 .2-.4.2-.7.3l-2-2.7-1.4.6.4 3.2c-.3 0-.5.3-.8.4z" fill="#1BB978" />
                                 <circle fill="#B9F4BC" cx="28" cy="37" r="3" />
                              </svg>
                           </div>
                           <div className="desc">
                              <h4>Desktop Mobshare</h4>
                              <h5>Nodejs</h5>
                              <div className="progress">
                                 <div className="progress-bar color-1" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}>
                                    <span>60%</span>
                                 </div>
                              </div>
                              <h5>HTML CSS</h5>
                              <div className="progress">
                                 <div className="progress-bar color-2" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "15%" }}>
                                    <span>15%</span>
                                 </div>
                              </div>
                              <h5>JQuery UI</h5>
                              <div className="progress">
                                 <div className="progress-bar color-3" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "5%" }}>
                                    <span>15%</span>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="itemprojeto">
                           <a target="_blank" href="https://github.com/gilberto-009199/JAgenda" className="btn">GitHub</a>
                           <a target="_blank" href="https://github.com/gilberto-009199/JAgenda/archive/v1.zip" className="btn">Download</a>
                           <div className="img">
                              <img alt="Imagem do projeto" src={ImageJAgenda} />
                           </div>
                           <div className="desc">
                              <h4>Agenda Swing Java</h4>
                              <h5>Java + JPA </h5>
                              <div className="progress">
                                 <div className="progress-bar color-1" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}>
                                    <span>60%</span>
                                 </div>
                              </div>
                              <h5> Java Swing </h5>
                              <div className="progress">
                                 <div className="progress-bar color-2" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "40%" }}>
                                    <span>40%</span>
                                 </div>
                              </div>
                           </div>
                        </div>


                        <div className="itemprojeto">
                           <a target="_blank" href="https://github.com/gilberto-009199/JAcademia" className="btn">GitHub</a>
                           <a target="_blank" href="https://github.com/gilberto-009199/JAcademia/archive/v1.zip" className="btn">Download</a>
                           <div className="img">
                              <img alt="Imagem do projeto" src={ImageJAcademia} />
                           </div>
                           <div className="desc">
                              <h4>Academia Swing Java</h4>
                              <h5> Java + JPA </h5>
                              <div className="progress">
                                 <div className="progress-bar color-1" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }}>
                                    <span>50%</span>
                                 </div>
                              </div>
                              <h5> Java Swing </h5>
                              <div className="progress">
                                 <div className="progress-bar color-2" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }}>
                                    <span>50%</span>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="itemprojeto">
                           <a target="_blank" href="https://github.com/gilberto-009199/JAgendaWeb" className="btn">GitHub</a>
                           <div className="img">
                              <img alt="Imagem do projeto" src={ImageJAcademiaWeb} />
                           </div>
                           <div className="desc">
                              <h4>JAcademia Web Java</h4>
                              <h5> JSP </h5>
                              <div className="progress">
                                 <div className="progress-bar color-3" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}>
                                    <span>60%</span>
                                 </div>
                              </div>
                              <h5> Html e Boostrap </h5>
                              <div className="progress">
                                 <div className="progress-bar color-5" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "40%" }}>
                                    <span>40%</span>
                                 </div>
                              </div>
                           </div>
                        </div>


                        <div className="itemprojeto">
                           <a target="_blank" href="https://github.com/gilberto-009199/CyberCode" className="btn">GitHub</a>
                           <a target="_blank" href="https://cypercode.herokuapp.com" className="btn">Site</a>
                           <div className="img">
                              <img alt="Imagem do projeto" src={ImageSite} />
                           </div>
                           <div className="desc">
                              <h4>Modelo de Site CyperCode</h4>
                              <h5> HTML </h5>
                              <div className="progress">
                                 <div className="progress-bar color-4" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                    <span>20%</span>
                                 </div>
                              </div>
                              <h5> CSS </h5>
                              <div className="progress">
                                 <div className="progress-bar color-3" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "40%" }}>
                                    <span>50%</span>
                                 </div>
                              </div>
                              <h5> JavaScript + JQuery </h5>
                              <div className="progress">
                                 <div className="progress-bar color-2" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "40%" }}>
                                    <span>30%</span>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="itemprojeto">
                           <a target="_blank" href="https://github.com/gilberto-009199/SenaiForca16" className="btn">GitHub</a>
                           <a target="_blank" href="https://github.com/gilberto-009199/SenaiForca16/archive/v1.zip" className="btn">Download</a>
                           <div className="img">
                              <img alt="Imagem do projeto" src={ImageForca} />
                           </div>
                           <div className="desc">
                              <h4>Aplicativo Forca Jogo</h4>
                              <h5> Java </h5>
                              <div className="progress">
                                 <div className="progress-bar color-4" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}>
                                    <span>60%</span>
                                 </div>
                              </div>
                              <h5> XML Layout </h5>
                              <div className="progress">
                                 <div className="progress-bar color-3" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style={{ width: "40%" }}>
                                    <span>40%</span>
                                 </div>
                              </div>
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