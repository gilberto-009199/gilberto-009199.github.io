/* eslint-disable */
import React,{ Component } from 'react';

import $ from './jquery';

import Home from './home/Main';
import Chat from './chat/Main';
import ImageAvatar from './assets/avatar/avatarRostoAcenandoSemFundo.png';


class Main extends Component {

  componentDidMount(){
     
     $('nav div[role="itemmenu"]').mouseenter(function(){
           $(this).find('a').shuffleLetters();
     })
     let projectBox = document.getElementsByClassName("ProjectBox")[0];
     let beforeDiv = document.getElementsByClassName("before")[0]
     let height = projectBox.offsetHeight;
      beforeDiv.style.height = height*1.2+'px';
     window.addEventListener('resize', function(){
      let height = projectBox.offsetHeight;
      beforeDiv.style.height = height*1.2+'px';
     })
  }
  render(){
        return (
          <>
           <Chat/>

            <Home/>
            <footer>
                FOOTER
            </footer>

          </>
        );
  }
}

export default Main;
