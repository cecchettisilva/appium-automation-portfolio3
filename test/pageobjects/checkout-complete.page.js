
class CheckoutCompletePage {

    //ELEMENTS

    get pageTitle () {
        return $('android=new UiSelector().text("CHECKOUT: COMPLETE!")')
    }
    
    get backHomeButton () {
        return $('android=new UiSelector().text("BACK HOME")')
    }

    //COMMANDS

    async validateCheckoutCompletePage (thankYou, completeDescription) {
        await expect(this.pageTitle).toHaveTextContaining('CHECKOUT: COMPLETE!')
        await expect($(`android=new UiSelector().text("${thankYou}")`)).toBeDisplayed()
        await expect($(`android=new UiSelector().text("${completeDescription}")`)).toBeDisplayed()
        await expect($('android=new UiSelector().className("android.widget.ImageView").instance(4)')).toBeDisplayed()
    }

    async backHome() {
        await this.backHomeButton.click()
    }
}

module.exports = new CheckoutCompletePage()
