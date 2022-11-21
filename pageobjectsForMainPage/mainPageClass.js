class MainPage{
    get listOfObjects(){
        return $("#root > div > div > div.main-list-button > div > button > div")
    }
    get listOfObjectsText(){
        return this.listOfObjects.getText();
    }
    get profile(){
        return $(".nav-user-dropdown-button");
    }
    get profileActualEmail(){
        return $(".nav-user-dropdown-email").getText();
    }
    get cookiesModalActualText(){
        return $("#root > div.cookie-consent > div").getText()
    }
    get expectedCookiesModalText(){
        return "Мы используем файлы cookie для вашего удобства. Подробнее о том, какие именно, вы можете узнать в нашей политике использования файлов cookie."
    }
    get cookieModalButton(){
        return $("#root > div.cookie-consent > button")
    }
    get allElementsMarkers(){
        return $$("#root > div > div > div.main-map-suspense-wrapper > div > div > div.leaflet-pane.leaflet-map-pane > div.leaflet-pane.leaflet-marker-pane")
    }
    get filterButton(){
        return $("div.filter-button")
    }
    get filterSideBar(){
        return $("#root > div > div > div.panel_panel__uXUel.filter-panel_filter-panel-container__Q2wIb")
    }
    get filterFavorites(){
        return $("#root > div > div > div.panel_panel__uXUel.filter-panel_filter-panel-container__Q2wIb > aside > div.tooltip_tooltip-container__PuxAQ > button");
    }
    get filterFavoritesActualText(){
        return "Показывать только избранные"
    }
    get filterByStatus(){
        return $("#root > div > div > div.panel_panel__uXUel.filter-panel_filter-panel-container__Q2wIb > aside > div.objects-list-control > div:nth-child(1) > p")
    }
} 
export default new MainPage();