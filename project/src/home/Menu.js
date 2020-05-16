import React,{Component} from 'react';
import logo from './assets/img/logo_azul_icon.png';


class Menu extends Component{
    
    render(){
        return(
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
                      <a href="https://gilberto-tec.gitbook.io/blog/">Blog</a>
                    </div>
                  </nav>
              </header>
            </>
        )
    }
    
}

export default Menu;