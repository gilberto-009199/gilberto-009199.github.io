import $ from 'jquery';

const webserver = "https://my-chat-conversation.herokuapp.com";

class Service{

    constructor(){
        this.sessionId = false;
    }

    sendMessage(message){
        //console.log(message);
        var ctx = this;
        let sessionId = this.sessionId;

        return $.ajax({
            type:'get',
            method:'get',
            url: webserver + '/watson',
            data: {
                    message,sessionId
                  }
         }).then((res)=>{
             //console.log(res)
             if(res.success)ctx.sessionId = res.menssage.sessionId;


             return res.menssage;

         })
    }
}
export default Service;