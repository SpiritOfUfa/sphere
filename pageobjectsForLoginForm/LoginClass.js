class Login {
  get voytiButton() {
    return $("div.login-button");
  }
  get voytiButtonTitle() {
    return $("div.login-button").getText();
  }
  get expectedVoytiButtonTittle() {
    return "Войти";
  }
  get headerTittle() {
    return $(
      "body > div:nth-child(11) > div > div > div.modal-header > div.modal-header__toggle-buttons > h3"
    ).getText();
  }
  get expectedTittle() {
    return "Вход";
  }
  get email() {
    return $(
      "body > div:nth-child(11) > div > div > div.modal-body > form > div:nth-child(1) > input"
    );
  }
  get emailInput(){
    return "super@site.com";
  }
  get emailPlaceholder() {
    return $(
      "body > div:nth-child(11) > div > div > div.modal-body > form > div:nth-child(1) > input"
    ).getAttribute("placeholder");
  }
  get expectedEmailPlaceholder() {
    return "Почта";
  }
  
  get password() {
    return $(
      "body > div:nth-child(11) > div > div > div.modal-body > form > div:nth-child(2) > input"
    );
  }
  get incorrectPasswordInput(){
     return "1U31xK!qCC112"
  }
  get correctPasswordInput(){
    return "1U31xK!qCC"
  }
  get passwordPlaceholder() {
    return $(
      "body > div:nth-child(11) > div > div > div.modal-body > form > div:nth-child(2) > input"
    ).getAttribute("placeholder");
  }
  get expectedPasswordPlaceholder() {
    return "Пароль";
  }
  get submitFormButton() {
    return $(
      "body > div:nth-child(11) > div > div > div.modal-body > form > button"
    );
  }
  get submitButtonName() {
    return $(
      "body > div:nth-child(11) > div > div > div.modal-body > form > button"
    ).getText();
  }
  get expectSubmitButtonName() {
    return "войти";
  }
  get hideNotification(){
return $("body > div:nth-child(11) > div > div > div.Modal-message-wrapper.Modal-message_hide");
  } 
  get showNotification(){
    return $("body > div:nth-child(11) > div > div > div.Modal-message-wrapper.Modal-message_show")
  }
  get notificationText(){
    return $("body > div:nth-child(11) > div > div > div.Modal-message-wrapper.Modal-message_show").getText();
      } 
  get unActiveNotificationAttribute(){
    return "Modal-message-wrapper Modal-message_hide";
  }
  get activeNotificationAttribute(){
    return "Modal-message-wrapper Modal-message_show";
  }
  get expectedNotificationText(){
return 'Не удалось авторизоваться. Пожалуйста, проверьте введенные данные'
  } 
}
export default new Login();
