# Cypress Automation Testing Training

Install Cypress via NPM

`npm install`

## All test case must placed on cypress/integration folder

To run Cypress with Cypress UI
`node_modules/.bin/cypress open`

To run Cypress headless mode (Electron)
`node_modules/.bin/cypress run`

To run Cypress non headless (Electron)
`node_modules/.bin/cypress run --headed`

To run Cypress non headless (Chrome)
`node_modules/.bin/cypress run --browser chrome`

To run specific test case file
`node_modules/.bin/cypress run --spec [path/to/test.js]`

To run specific folder test case
`node_modules/.bin/cypress run --spec [path/to/*]`