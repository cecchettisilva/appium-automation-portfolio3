require('dotenv').config()

exports.config = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    hostname: 'hub.browserstack.com',
    services: [
      [
        'browserstack',
        {
          //app: 'general example',
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
        projectName: "General example",
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