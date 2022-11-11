class Buttons{
    get voytiButton(){
        return $("div.login-button")
    } 
    get formButton(){
        return $("body > div:nth-child(11) > div > div > div.modal-body > form > button");
    }
    get formButtonName(){
        return $(
            "body > div:nth-child(11) > div > div > div.modal-body > form > button"
          ).getText();  
    } 
    get expectFormButtonName(){
       return "войти";
    };
}
export default new Buttons()