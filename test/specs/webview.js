describe("webview", ()=>{
    it("test webview",async ()=>{


        // Desliza a tela para cima
        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: 500, y: 1500 },
                { type: 'pointerDown', button: 0 },
                { type: 'pointerMove', duration: 1000, x: 500, y: 300 },
                { type: 'pointerUp', button: 0 }
            ]
        }])
        
        await browser.pause(1000)

        await browser.pause(1000)
        await $('~ColorNote').click();
        await driver.saveScreenshot("colorNote.png")
        await browser.pause(1000)
        await $('//android.widget.FrameLayout[@content-desc="More"]/android.widget.ImageView').click()
        await browser.pause(1000)

        await $('//*[@text="Like us on Facebook"]').click()

        await browser.pause(2000)
        console.log(await driver.getContext())
        console.log(await driver.getContexts())
        await browser.pause(2000)
        driver.switchContext('WEBVIEW_chrome')
        await browser.pause(1000)
        await expect($('//*[@text="Log in"]')).toBeDisplayed()
        await browser.pause(2000)
        driver.switchContext('NATIVE_APP')
        driver.back()
        await browser.pause(1000)
        await expect($('//*[@text="Like us on Facebook"]')).toBeDisplayed()
    })
})