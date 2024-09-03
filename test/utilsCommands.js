// Desliza a tela para cima
await driver.performActions([{
    type: 'pointer',
    id: 'finger1',
    parameters: { pointerType: 'touch' },
    actions: [
        { type: 'pointerMove', duration: 0, x: 500, y: 1500 },
        { type: 'pointerDown', button: 0 },
        { type: 'pointerMove', duration: 1000, x: 500, y: 300 },
        { type: 'pointerUp', button: 0 }
    ]
}])

//espera com timeout
await buttonText.waitForDisplayed({ timeout: 500 }) 