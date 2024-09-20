const { exec } = require('child_process')

context("API Demos", () => {

    beforeEach(async () => {
        await driver.startActivity('com.hmh.api', 'com.hmh.api.ApiDemos')        
    })

    afterEach(async () => {
        await driver.terminateApp('com.hmh.api')
    })

    //WIP
    describe("API Demos APP - Voice Recognition", ()=>{
    
        it("[Api Demos][App] Assert voice recognition", async () =>{
            
            const buttonApp = await $('android=new UiSelector().text("App")')
            await buttonApp.click()
    
            const buttonVoiceRecognition = await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Voice Recognition"))')
            await buttonVoiceRecognition.click()
    
            //await browser.pause(5000)
    
            const titleTextView = await $('android=new UiSelector().text("App/Voice Recognition")')
            await expect(titleTextView).toHaveText('App/Voice Recognition')
    
            const buttonSpeak = await $('android=new UiSelector().resourceId("com.hmh.api:id/btn_speak")')
            await buttonSpeak.click()
        
            exec('adb -s emulator-5554 push test/fixtures/audio/hello.wav /sdcard/hello.wav', (err, stdout, stderr) => {
                if (err) {
                    console.error(`Erro ao copiar arquivo: ${err}`)
                    return
                }
                exec('adb -s emulator-5554 shell am start -a android.intent.action.VIEW -d file:///sdcard/hello.wav -t audio/wav', (err, stdout, stderr) => {
                    if (err) {
                        console.error(`Erro ao executar áudio: ${err}`)
                        return
                    }
                    console.log(`Áudio reproduzido: ${stdout}`)
                })
            })

            await browser.pause(5000)
    
        })
    })

})
