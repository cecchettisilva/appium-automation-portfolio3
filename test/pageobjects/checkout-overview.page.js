
class CheckoutOverviewPage {

    //ELEMENTS

    get pageTitle () {
        return $('android=new UiSelector().text("CHECKOUT: OVERVIEW")')
    }
    
    get finishButton () {
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("test-FINISH"))')
    }

    //COMMANDS

    async validateCheckoutOverviewPage (productName, productDescription, productValue, paymentInformation, shippingInformation, itemTotal, tax, total) {
        await expect(this.pageTitle).toHaveTextContaining('CHECKOUT: OVERVIEW')
        await expect($(`//android.widget.TextView[@text='${productName}']`)).toBeDisplayed()
        await expect($(`//android.widget.TextView[@text='${productDescription}']`)).toBeDisplayed()
        await expect($(`//android.widget.TextView[@text='${productValue}']`)).toBeDisplayed()
        await expect($(`//android.widget.TextView[@text='${paymentInformation}']`)).toBeDisplayed()
        await expect($(`//android.widget.TextView[@text='${shippingInformation}']`)).toBeDisplayed()

        const itemTotalElement = await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("${itemTotal}"))`)
        await expect(itemTotalElement).toBeDisplayed()

        const taxElement = await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("${tax}"))`)
        await expect(taxElement).toBeDisplayed()

        const totalElement = await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("${total}"))`)
        await expect(totalElement).toBeDisplayed()
    }

    async finishCheckoutOverview() {
        await this.finishButton.click()
    }
}

module.exports = new CheckoutOverviewPage()
