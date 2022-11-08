const expect = require('chai').expect
describe('Main page test suite',  () => {
    it('Test 1',  () => {
         browser.url('https://demoqa.com')
         browser.pause(5000)
         const expectedTitle = 'ToolsQA'
         const actualTitle = browser.getTitle();
         expect(actualTitle).to.equal(expectedTitle)
         
    });
    });


