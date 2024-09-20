
class LoginPage {

    //ELEMENTS

    get inputUsername () {
        return $('~test-Username')
    }

    get inputPassword () {
        return $('~test-Password')
    }

    get btnSubmit () {
        return $('~test-LOGIN')
    }

    //COMMANDS

    async login (username, password, expectedText) {
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.btnSubmit.click()
        await expect($(`//*[@text="${expectedText}"]`)).toBeDisplayed()
    }
}

module.exports = new LoginPage()
