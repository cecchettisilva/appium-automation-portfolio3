context("API Demos", () => {

    beforeEach(async () => {
        await driver.startActivity('com.hmh.api', 'com.hmh.api.ApiDemos')        
    })

    afterEach(async () => {
        await driver.terminateApp('com.hmh.api')
    })

    describe("API Demos APP - Alerts", () =>{

        it("[Api Demos][App] Testing alerts - @demo", async ()=>{
            
            await browser.pause(2000)
            await $('(//android.widget.TextView[@resource-id="android:id/text1"])[3]').click()
            await browser.pause(2000)
            await $('(//android.widget.TextView[@resource-id="android:id/text1"])[4]').click()
            await browser.pause(2000)
            await $('//android.widget.Button[@resource-id="com.hmh.api:id/two_buttons"]').click()
            await browser.pause(1000)
            console.log(await browser.getAlertText())
            await $('//android.widget.Button[@resource-id="android:id/button1"]').click()
            await browser.pause(1000)
            await expect($('//android.widget.TextView[@resource-id="android:id/alertTitle"]')).not.toExist()
        })
    })
})