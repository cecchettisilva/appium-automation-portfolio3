context("Chrome", () => {

    beforeEach(async () => {
        await driver.startActivity('com.android.chrome', 'com.google.android.apps.chrome.Main')        
    })

    afterEach(async () => {
        await driver.terminateApp('com.android.chrome')
    })

    describe("Example input", ()=>{
        
        it("test input values", async ()=>{ 
            await browser.pause(1000)
            const input = await $('android=new UiSelector().resourceId("com.android.chrome:id/search_box_text")')
            
            await input.addValue("William Cecchetti da Silva passo fundo")
            await browser.keys("Enter")
            await browser.pause(3000)
        })   
    })
})