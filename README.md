# Test Automation Project with WebdriverIO, Appium, and JavaScript

This project demonstrates the automation of Android mobile application tests using **WebdriverIO**, **Appium**, and **JavaScript**.
Two applications were used for the tests:

- **API Demos**: A sample app with various Android functionalities for automation.
- **Android SauceLabs Mobile Sample v2.7.1**: A sample app for testing, provided by Sauce Labs.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Reports with Allure](#reports-with-allure)
- [Tools Used](#tools-used)
- [Appium Setup](#appium-setup)
- [Final Considerations](#final-considerations)

## Installation

1. Clone this repository to your local machine:

```bash {"id":"01J86N2K94RZFC6CARM2ZMKSBN"}
git clone https://github.com/cecchettisilva/appium-automation-portfolio3.git
```

2. Install the project dependencies using npm:

```bash {"id":"01J86N2K94RZFC6CARM6NES70K"}
npm install
```

3. Ensure Appium is installed and properly set up:

```bash {"id":"01J86N2K94RZFC6CARMAD62BHH"}
npm install -g appium
appium -v
```

4. Ensure that Android SDK and the Android device emulator are correctly configured.

# Configuration

The main project configurations are in the wdio.conf.js file. In this file, you can adjust parameters such as:

- Platform (Android)
- Appium Capabilities (e.g., app, platformName, deviceName, etc.)
- Test Framework (Mocha)
- Services (such as the Appium service)

## Example of Appium Capabilities:

```bash {"id":"01J86N2K94RZFC6CARMCRX8VB3"}
capabilities: [{
   platformName: "Android",
   deviceName: "emulator-5554",
   app: "/path/to/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk",
   automationName: "UiAutomator2"
}],

```

## Environment Variables

This project uses the dotenv package to load environment variables from a .env file. For example, to specify the path to the APK file:

```bash {"id":"01J86N2K94RZFC6CARMEDV8YQE"}
APP_PATH=/path/to/your/app.apk

```

# Project Structure

The basic project structure is as follows:

```bash {"id":"01J86N2K94RZFC6CARMFE357RQ"}
|── test
│   ├── specs
│   │   └── sample.test.js      # Example tests
├── wdio.conf.js                # WebdriverIO configuration file
├── package.json                # Dependencies and scripts
└── .env                        # Environment variables

```

# Running Tests

To run the tests local, use the following command:

```bash {"id":"01J86N2K94RZFC6CARMGF5CAPR"}
npx wdio run .\config\wdio.android.conf.js --spec .\test\specs\selected-spec.js

```

To run the tests with github actions, use the following steps:

```bash {"id":"01J86NFYHKPP0GGVEZBQZ7MM4W"}
# Access the ACTIONS tab in github 
# 
```

This command will start WebdriverIO, interact with android emulator and execute the tests defined in the test specifications.

Reports with Allure
Test reports are generated using Allure. To generate and view the reports, use the following commands:

Generate and open the Allure report:

```bash {"id":"01J86N2K94RZFC6CARMKQZG6DC"}
npm run allure-report

```

This command will generate a detailed test report, including charts, logs, and screenshots.

# Tools Used

This project uses the following packages and tools:

- WebdriverIO: For test automation.
- Appium: For mobile device control.
- Mocha: Test framework.
- Allure Reporter: For generating test reports.
- Eslint: To ensure code best practices.

# Main Dependencies:

- @wdio/cli: WebdriverIO CLI.
- @wdio/appium-service: Appium service for WebdriverIO.
- appium: Automation tool for mobile devices.
- allure-commandline: Command-line tool for generating Allure reports.

# Appium Setup

Make sure Appium is running when executing the tests. You can start Appium via the command line:

```bash {"id":"01J86N2K95P8NQGNC1TAE9HFEY"}
appium

```

Additionally, configure the Android emulator to ensure that the tests run correctly on the desired Android device or emulator.

# Final Considerations

This project provides a complete example of how to set up a test automation environment for Android applications using WebdriverIO and Appium. Feel free to adjust the settings, add more tests, and expand the project as needed.

---

__Author:__ _William Cecchetti da Silva_