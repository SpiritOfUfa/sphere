class Tittles{
    get headerTittle(){
        return $(
            "body > div:nth-child(11) > div > div > div.modal-header > div.modal-header__toggle-buttons > h3"
          ).getText();
    }
    get expectedTittle(){
        return "Вход"
    }
}
export default new Tittles();