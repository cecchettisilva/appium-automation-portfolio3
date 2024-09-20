
class CartPage {

    //ELEMENTS

    get pageTitle () {
        return $('android=new UiSelector().text("YOUR CART")')
    }

    get checkoutButton () {
        return $('android=new UiSelector().description("test-CHECKOUT")')
    }

    //COMMANDS

    async validateCartPage (productName, productDescription, productValue) {
        await expect(this.pageTitle).toHaveTextContaining('YOUR CART')
        await expect($(`//android.widget.TextView[@text='${productName}']`)).toBeDisplayed()
        await expect($(`//android.widget.TextView[@text='${productDescription}']`)).toBeDisplayed()
        await expect($(`//android.widget.TextView[@text='${productValue}']`)).toBeDisplayed()
    }

    async proceedToCheckout () {
        await this.checkoutButton.click()
    }
}

module.exports = new CartPage()
