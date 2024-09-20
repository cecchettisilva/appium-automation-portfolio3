
class CheckoutInformationPage {

    //ELEMENTS

    get pageTitle () {
        return $('android=new UiSelector().text("CHECKOUT: INFORMATION")')
    }
    
    get inputFirstName () {
        return $('~test-First Name')
    }

    get inputLastName () {
        return $('~test-Last Name')
    }

    get inputZipCode () {
        return $('~test-Zip/Postal Code')
    }

    get continueButton () {
        return $('~test-CONTINUE')
    }

    //COMMANDS

    async fillDataInformation (firstName, lastName, zipCode) {
        await expect(this.pageTitle).toHaveTextContaining('CHECKOUT: INFORMATION')
        await this.inputFirstName.setValue(firstName)
        await this.inputLastName.setValue(lastName)
        await this.inputZipCode.setValue(zipCode)
    }

    async contiueToCheckoutOverview() {
        await this.continueButton.click()
    }
}

module.exports = new CheckoutInformationPage()
