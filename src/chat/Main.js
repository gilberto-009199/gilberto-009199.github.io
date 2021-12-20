import React,{Component}  from 'react';
import $ from 'jquery';
import Service from './service.js';

import ImageAvatar from './assets/avatar/avatarRostoAcenandoSemFundo.png';

class Main extends Component{
    
    constructor(){
        super();
        this.service = new Service();
        this.state ={
            isSend:false,
            menssages:[
                {
                    text:"Olá, oque desejá perguntar?",
                    className:"menssage"
                }
            ],
            form:{
                input:''
            },
            chat:{
                show:false
            }
        }

    }
    close(e){
        e.preventDefault();
        if($(e.target).is('.chatbot')){
            this.setState({chat:{show:!this.state.chat.show}})
        }else{
            //console.log("Não fechar")
        }
        
    }
    ChangeInput = event =>{
      if(!this.state.isSend)this.setState({
              form:{
                  input:event.target.value
              }
          });
    }
    sendMessage(isEnter){
        //console.log(this.state.form.input)

        let menssagem = this.state.form.input;
        if(!this.state.isSend){
            
            if(!(isEnter == 'Enter') && isEnter != undefined) return;

            this.setState(state => {
                  const menssages = [...state.menssages,
                                        {
                                         text:state.form.input,
                                         className:'menssage user'
                                        } 
                                    ];
                  return {
                    isSend:true,
                    menssages,
                    form:{
                        input:''
                    },
                  };
                });
            this.service.sendMessage(menssagem).then(res=>{
                //console.log(res);

                this.setState(state => {
                      const menssages = [...state.menssages,
                                            {
                                             text:res.menssage,
                                             className:'menssage'
                                            } 
                                        ];
                      return {
                        isSend:false,
                        menssages,
                        form:{
                            input:''
                        },
                      };
                    });
                    $('.menssages').animate({scrollTop: document.body.scrollHeight},"fast");
            })
       }else console.log("Dado bloqueado")
    }

    render(){

        return(
                <>
                
                     <div className="chatbot" onClick={(e)=>this.close(e)}>
                     
                       <div className="chat" data-disable={ !this.state.chat.show }>
                            <div className="header">
                                <button onClick={ ()=>{ this.setState({chat:{show:!this.state.chat.show}}) } }>Fechar</button>
                            </div>
                            <div className="loader" data-disable={ !this.state.isSend }>
                                Carregando aguarde...
                            </div>
                            <div className="menssages">
                                {
                                    this.state.menssages.map(function(item,index){
                                        return(
                                            <div key={index} className={item.className}>
                                                {item.text}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="formchat">
                               <input onChange={this.ChangeInput} onKeyUp={(e)=>this.sendMessage(e.key)} value={this.state.form.input}/>
                               <button onClick={()=>this.sendMessage()}>
                                 Enviar
                               </button>
                            </div>
                         </div>
                       
                       <div className="avatar" data-disable={ this.state.chat.show } onClick={ ()=>{ this.setState({chat:{show:!this.state.chat.show}}) } }>
                          <img src={ImageAvatar} alt="personagem"/>
                          <span className="title">CHATBOT</span>
                          <span className="menssage"> Click em min para tirar duvidas!</span>
                       </div>
                    </div>
                </>
        )
    }
}
export default Main;