import $ from 'jquery';


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
            //url:'http://localhost:8080/watson',
            url:'https://enigmatic-tundra-81799.herokuapp.com/watson',
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