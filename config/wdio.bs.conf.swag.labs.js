require('dotenv').config()

exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'williamcecchetti_d3iem8',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'WCAMEzgQRkGP6MNwL443',
    hostname: 'hub.browserstack.com',
    services: [
      [
        'browserstack',
        {
          app: 'bs://117dc9b6070451ee19881891d06b954faf4bce8a',
          buildIdentifier: "${BUILD_NUMBER}",
          browserstackLocal: true
        },
      ]
    ],
    capabilities: [{
    //   'bstack:options': {
    //     deviceName: 'Samsung Galaxy S22 Ultra',
    //     platformVersion: '12.0',
    //     platformName: 'android',
    //   }
    // }, {
      'bstack:options': {
        deviceName: 'Google Pixel 7 Pro',
        platformVersion: '13.0',
        platformName: 'android',
      } }, {
    //   'bstack:options': {
    //     deviceName: 'OnePlus 9',
    //     platformVersion: '11.0',
    //     platformName: 'android',
    //   }
    }],
    commonCapabilities: {
      'bstack:options': {
        projectName: "BrowserStack Swag Labs",
        buildName: "bstack-swag-lags",
        testObservability: true,
        debug: true,
        networkLogs: true,
        percy: false,
        percyCaptureMode: false
      }
    },
    maxInstances: 10,
}