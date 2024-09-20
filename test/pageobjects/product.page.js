
class ProductPage {

    //ELEMENTS

    get menuButton () {
        return $('~test-Menu')
    }

    get logoutButton () {
        return $('~test-LOGOUT')
    }

    get addToCartButton () {
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("test-ADD TO CART"))')
    }

    get cartButton () {
        return $('android=new UiSelector().description("test-Cart")')
    }

    productName (productName) {
        return $(`android=new UiSelector().text("${productName}")`)
    }

    //COMMANDS

    async logout (expectedText) {
        await this.menuButton.click()
        await this.logoutButton.click()
        await expect($(`//*[@text="${expectedText}"]`)).toBeDisplayed()
    }

    async selectProduct (productName) {
        await this.productName(productName).click()
        await expect($(`android=new UiSelector().text("${productName}")`)).toBeDisplayed()
    }

    async addToCartProductDetailPage () {
        await this.addToCartButton.click()
    }

    async goToCartPage () {
        await this.cartButton.click()
    }
}

module.exports = new ProductPage()
