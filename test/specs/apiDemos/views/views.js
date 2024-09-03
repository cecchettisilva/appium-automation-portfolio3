
describe("API Demos APP", ()=>{

    beforeEach(async () => {
        await driver.startActivity('com.hmh.api', 'com.hmh.api.ApiDemos')        
    })

    afterEach(async () => {
        await driver.terminateApp('com.hmh.api')
    })

    it("[Api Demos][Views] Assert date change to 2020 year and 10 day", async () =>{
        
        const buttonText = await $('android=new UiSelector().text("Views")')
        await buttonText.click()

        const buttonDateWidgets = await $('android=new UiSelector().text("Date Widgets")')
        await buttonDateWidgets.click()

        const buttonDialog = await $('android=new UiSelector().text("1. Dialog")')
        await buttonDialog.click()
    
        const buttonChangeDate = await $('android=new UiSelector().text("change the date")')
        await buttonChangeDate.click()

        const yearElement = await $('android=new UiSelector().resourceId("android:id/date_picker_header_year")')
        await yearElement.click()

        const yearSelected = 2020
        const selectYearSelector = await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${yearSelected}")`)
        await selectYearSelector.click()
        await expect(yearElement).toHaveText('2020')

        const daySelected = 10
        const selectDaySelector = await $(`android=new UiSelector().text("${daySelected}")`)
        await selectDaySelector.click()

    })

    it("[Api Demos][Views] Assert time change to 11:44 PM", async () =>{
        
        const buttonText = await $('android=new UiSelector().text("Views")')
        await buttonText.click()

        const buttonDateWidgets = await $('android=new UiSelector().text("Date Widgets")')
        await buttonDateWidgets.click()

        const buttonDialog = await $('android=new UiSelector().text("1. Dialog")')
        await buttonDialog.click()
    
        const buttonChangeTime = await $('android=new UiSelector().resourceId("com.hmh.api:id/pickTime")')
        await buttonChangeTime.click()

        const selectedHour = 11
        const selectHour = await $(`android=new UiSelector().description("${selectedHour}")`)
        await selectHour.click()

        const selectedMinutes = 45
        const selectMinutes = await $(`//android.widget.RadialTimePickerView.RadialPickerTouchHelper[@content-desc="${selectedMinutes}"]`)
        await selectMinutes.click()

        await $('android=new UiSelector().resourceId("android:id/pm_label")').click()
        
        const hourView = await $('android=new UiSelector().resourceId("android:id/hours")')
        await expect(hourView).toHaveText('11')

        const minutesView = await $('android=new UiSelector().resourceId("android:id/minutes")')
        await expect(minutesView).toHaveText('45')

        await $('android=new UiSelector().resourceId("android:id/button1")').click()

        const displayDateHour = await $('android=new UiSelector().resourceId("com.hmh.api:id/dateDisplay")')
        await expect(displayDateHour).toHaveTextContaining('23:45')
    })

    it("[Api Demos][Views] Long press and drag to specific coordinates", async () => {
        
        const buttonText = await $('android=new UiSelector().text("Views")')
        await buttonText.click()
    
        const buttonDragAndDrop = await $('android=new UiSelector().text("Drag and Drop")')
        await buttonDragAndDrop.click()
    
        const elem = await $('android=new UiSelector().resourceId("com.hmh.api:id/drag_dot_3")')
    
        const startLocation = await elem.getLocation()
    
        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startLocation.x, y: startLocation.y }, 
                { type: 'pointerDown', button: 0 }, 
                { type: 'pause', duration: 1000 }, 
                { type: 'pointerMove', duration: 1000, x: 601, y: 1096 }, 
                { type: 'pointerUp', button: 0 }     
            ]
        }])
    
        await driver.releaseActions()

        const expectText = await $('android=new UiSelector().resourceId("com.hmh.api:id/drag_text")')
        await expect(expectText).toHaveTextContaining('Dot : com.hmh.api.view.DraggableDot')
    })
})