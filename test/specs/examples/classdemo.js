const ChromeObjects = require('../../pageobjects/chromeObjects')

beforeEach(async () => {
    await driver.startActivity('com.android.chrome', 'com.google.android.apps.chrome.Main')        
})

afterEach(async () => {
    await driver.terminateApp('com.android.chrome')
})

describe("Example using class", ()=>{
    it("example test using class", async ()=>{
        await ChromeObjects.openChrome.click();
        await browser.pause(5000)
        expect(await ChromeObjects.classText.getText()).toHaveText("Search or type web address") 
    })
    
})