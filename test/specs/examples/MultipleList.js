describe("Example list of values", ()=>{

    it("test list of values", async ()=>{

        const dayMonth = await $('android=new UiSelector().resourceId("com.google.android.apps.nexuslauncher:id/clock")')
        const textDayMonth = await dayMonth.getText() 
        const weather = await $('android=new UiSelector().resourceId("com.google.android.apps.nexuslauncher:id/title_weather_text")')
        const textWeather = await weather.getText() 

        const expectedList = [textDayMonth, textWeather, 'Messages', 'Chrome']
        const actualList = []
        const listValues = await $$('android.widget.TextView')

        for(const ele of listValues){
            actualList.push(await ele.getText())
        }

        await expect(actualList).toEqual(expectedList)
    })

})