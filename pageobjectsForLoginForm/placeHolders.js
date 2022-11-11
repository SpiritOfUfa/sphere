class Placeholders {
  get emailPlaceholder() {
    return $(
      "body > div:nth-child(11) > div > div > div.modal-body > form > div:nth-child(1) > input"
    ).getAttribute("placeholder");
  }
  get expectEmailPlaceholder() {
    return "Почта";
  }
  get  passwordPlaceholder(){
return  $(
    "body > div:nth-child(11) > div > div > div.modal-body > form > div:nth-child(2) > input"
  ).getAttribute("placeholder");
  } 
  get expectPasswordPlaceholder(){
    return "Пароль";
  }
}
export default new Placeholders();
