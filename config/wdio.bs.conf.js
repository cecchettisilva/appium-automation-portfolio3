require('dotenv').config()

exports.config = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    hostname: 'hub.browserstack.com',
    services: [
      [
        'browserstack',
        {
          app: 'bs://663fe30538579acc82b21c74abe3a91719081b9d',
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
    }, {
      'bstack:options': {
        deviceName: 'Google Pixel 7 Pro',
        platformVersion: '13.0',
        platformName: 'android',
      } }, {
      'bstack:options': {
        deviceName: 'OnePlus 9',
        platformVersion: '11.0',
        platformName: 'android',
      }
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
  maxInstances: 10,
}