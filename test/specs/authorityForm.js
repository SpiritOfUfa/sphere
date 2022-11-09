const expect = require("chai").expect

describe('Autority Form', () => {
    it('Check the authorization form ', async () => {
        browser.url('https://dev.sphere.oelp.ru:7443/user/');
        let voytiButton =  $("div.login-button");
        voytiButton.click();
         await browser.pause(5000);
    });
});