import React,{ Component } from 'react';



import $ from './jquery';

import Home from './home/Main';


class Main extends Component {

  componentDidMount(){
     console.log("hellow")
     $('nav div[role="itemmenu"]').mouseenter(function(){
           $(this).find('a').shuffleLetters();
     })
  }
  render(){
        return (
          <>
            <div className="chatbot">
                  Chat
            </div>

            <Home/>
            <footer>
                FOOTER
            </footer>

          </>
        );
  }
}

export default Main;
