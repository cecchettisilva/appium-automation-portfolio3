const LoginPage = require('../../pageobjects/login.page')
const ProductPage = require('../../pageobjects/product.page')

describe("Swag Labs APP - Login", ()=>{

    beforeEach(async () => {
        await driver.startActivity("com.swaglabsmobileapp", "com.swaglabsmobileapp.MainActivity")        
    })

    afterEach(async () => {
        await driver.terminateApp('com.swaglabsmobileapp')
    })

    it("[Swag Labs][login] Successful login", async () =>{
        
        await LoginPage.login('standard_user', 'secret_sauce', 'PRODUCTS')
    })

    it("[Swag Labs][login] Successful logout", async () =>{
        
        await LoginPage.login('standard_user', 'secret_sauce', 'PRODUCTS')
        await ProductPage.logout('LOGIN')
    })

    it("[Swag Labs][login] Unsuccessful login", async () =>{
        
        await LoginPage.login('locked_out_user', 'secret_sauce', 'Sorry, this user has been locked out.')
    })
})



