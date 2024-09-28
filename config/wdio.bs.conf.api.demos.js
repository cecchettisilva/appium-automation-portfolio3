require('dotenv').config()

exports.config = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    hostname: 'hub.browserstack.com',
    services: [
      [
        'browserstack',
        {
          app: process.env.BROWSERSTACK_APP_KEY_API_DEMOS,
          buildIdentifier: "12.0",
          browserstackLocal: true
        },
      ]
    ],
    capabilities: [{
      'bstack:options': {
        deviceName: 'Samsung Galaxy S22 Ultra',
        platformVersion: '12.0',
        platformName: 'android',
      }
    // }, {
    //   'bstack:options': {
    //     deviceName: 'Google Pixel 7 Pro',
    //     platformVersion: '13.0',
    //     platformName: 'android',
    //   } }, {
    //   'bstack:options': {
    //     deviceName: 'OnePlus 9',
    //     platformVersion: '11.0',
    //     platformName: 'android',
    //   }
    }],
    commonCapabilities: {
      'bstack:options': {
        projectName: "BrowserStack Sample",
        buildName: "bstack-demo",
        testObservability: true,
        debug: true,
        networkLogs: true,
        percy: false,
        percyCaptureMode: false
      }
    },
    maxInstances: 1,
}