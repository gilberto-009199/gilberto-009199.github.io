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
