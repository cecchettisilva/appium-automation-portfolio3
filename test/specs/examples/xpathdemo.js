context("Chrome", () => {

    beforeEach(async () => {
        await driver.startActivity('com.android.chrome', 'com.google.android.apps.chrome.Main')        
    })

    afterEach(async () => {
        await driver.terminateApp('com.android.chrome')
    })

    describe("suite", ()=>{

        it("test with xpath", async ()=>{
            
            await browser.pause(5000)
            const className = await $('//android.widget.EditText[@resource-id="com.android.chrome:id/search_box_text"]')
            expect(await className.getText()).toHaveText("Search or type web address") 
        })   
    })
})