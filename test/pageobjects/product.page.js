
class ProductPage {

    //ELEMENTS

    get menuButton () {
        return $('~test-Menu')
    }

    get logoutButton () {
        return $('~test-LOGOUT')
    }

    //COMMANDS

    async logout (expectedText) {
        await this.menuButton.click()
        await this.logoutButton.click()
        await expect($(`//*[@text="${expectedText}"]`)).toBeDisplayed()
    }
}

module.exports = new ProductPage()
