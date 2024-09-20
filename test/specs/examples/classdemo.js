const ChromeObjects = require('../../pageobjects/chromeObjects')

describe("Example using class", ()=>{
    it("example test using class", async ()=>{
        await ChromeObjects.openChrome.click();
        await browser.pause(5000)
        expect(await ChromeObjects.classText.getText()).toHaveText("Search or type web address") 
    })
    
})