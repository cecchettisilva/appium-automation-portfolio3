const LoginPage = require('../../pageobjects/login.page')
const ProductPage = require('../../pageobjects/product.page')
const CartPage = require('../../pageobjects/cart.page')
const CheckoutInformationPage = require('../../pageobjects/checkout-information.page')
const CheckoutOverviewPage = require('../../pageobjects/checkout-overview.page')
const CheckoutCompletePage = require('../../pageobjects/checkout-complete.page')

describe("Swag Labs APP - Order", ()=>{

    beforeEach(async () => {
        await driver.startActivity("com.swaglabsmobileapp", "com.swaglabsmobileapp.MainActivity")        
    })

    afterEach(async () => {
        await driver.terminateApp('com.swaglabsmobileapp')
    })

    it("[Swag Labs][order] Order completed successfully", async () =>{
        
        await LoginPage.login('standard_user', 'secret_sauce', 'PRODUCTS')
        await ProductPage.selectProduct("Sauce Labs Backpack")
        await ProductPage.addToCartProductDetailPage()
        await ProductPage.goToCartPage()
        await CartPage.validateCartPage(
            'Sauce Labs Backpack',
            'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
            '$29.99'
        )
        await CartPage.proceedToCheckout()
        await CheckoutInformationPage.fillDataInformation('William', 'Checchetti QA', '99032060')
        await CheckoutInformationPage.contiueToCheckoutOverview()
        await CheckoutOverviewPage.validateCheckoutOverviewPage(
            'Sauce Labs Backpack',
            'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
            '$29.99',
            'SauceCard #31337',
            'FREE PONY EXPRESS DELIVERY!',
            'Item total: $29.99',
            'Tax: $2.40',
            'Total: $32.39'
        )
        await CheckoutOverviewPage.finishCheckoutOverview()
        await CheckoutCompletePage.validateCheckoutCompletePage(
            'THANK YOU FOR YOU ORDER',
            'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
        )
    })
})



