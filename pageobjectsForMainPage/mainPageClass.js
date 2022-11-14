class MainPage{
    get listOfObjects(){
        return $("#root > div > div > div.main-list-button > div > button > div")
    }
    get listOfObjectsText(){
        return this.listOfObjects.getText();
    }
} 
export default new MainPage();