class AdminSiteProfileClass{
    get profileButtonDropdown(){
        return $('#root > div.app > header > div > div > div > button');
    }
    get exitButton(){
        return $("#root > div.app > header > div > div > div > div > button:nth-child(1)");
    }
    get agencyFormButton(){
        return $("#root > div.app > header > div > div > div > div > button:nth-child(2)");
    }
    get returnToSite(){
        return $("#root > div.app > header > div > div > div > div > button:nth-child(3)");
    }

}
export default new AdminSiteProfileClass();