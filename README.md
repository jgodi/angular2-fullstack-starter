[![Dependency Status](https://david-dm.org/jgodi/angular2-fullstack-starter.svg)](https://david-dm.org/jgodi/angular2-fullstack-starter)

# Angular2 Fullstack Starter

> A basic starter project that features Angular 2 and Express/Node. Can be written in either Typescript or ES6. Has fully integrated unit and e2e tests.

> Huge Kudos goes to the [Angular2 Webpack Starter](https://github.com/AngularClass/angular2-webpack-starter) for being a great example!

### Quick Start

```bash
# Clone the repo
git clone https://github.com/jgodi/angular2-fullstack-starter.git

# CD into the project
cd angular2-fullstack-starter

# Install all required dependencies
npm install

# Start the server (express/node)
npm start

# Open another console and use webpack to build/watch the client code
npm run watch
```

Now, navigate to [http://localhost:3000](http://localhost:3000) in your browser and code!

### Testing

#### Unit Testing w/ Karma

```bash
# Run unit tests
npm test
```

Will run all karma unit tests. Coverage will be reported in `/coverage`.

#### E2E Testing w/ Protractor

Make sure to install the webdriver before hand using `npm run webdriver-update`.

```bash
# Start the application in one command prompt
npm start

# Start the webdrive in another command prompt
npm run webdriver-start

# Finally, run the e2e test in a third command prompt
npm run e2e
```

### Building

Building this application is easy, there are a few commands to make it very easy. It uses the `index.html` file that is located in `public` as a base template and outputs a build version of it into `server/views/index.html` to be served up via node.

#### Development

To build a development version of the application, run the following commands:

```bash
# Build a development version 
npm run build:dev
```

#### Production

To build a fully optimized production version of the application, run the following commands:

```bash
# Build a production version
npm run build:prod
```

### TODO
* Complete all unit tests
* Code Coverage Reporting
* ESLint Integration
* Better documentation