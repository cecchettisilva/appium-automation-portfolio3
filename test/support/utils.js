export async function scrollUp() {
    await driver.performActions([{
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
            { type: 'pointerMove', duration: 0, x: 500, y: 1500 },
            { type: 'pointerDown', button: 0 },
            { type: 'pointerMove', duration: 0, x: 500, y: 300 },
            { type: 'pointerUp', button: 0 }
        ]
    }])
    await driver.pause(400)
}

export async function scrollDown() {
    await driver.performActions([{
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
            { type: 'pointerMove', duration: 0, x: 500, y: 300 },
            { type: 'pointerDown', button: 0 },
            { type: 'pointerMove', duration: 0, x: 500, y: 1500 },
            { type: 'pointerUp', button: 0 }
        ]
    }])
    await driver.pause(400)
}
