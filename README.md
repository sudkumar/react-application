# A base for React Apps with [create-react-app](https://github.com/facebookincubator/create-react-app)

## Development

    git clone https://github.com/sudkumar/react-application your-app

    cd your-app

    yarn install

    yarn start

## Creating build for different environemts

When building an application, application goes through different environemnts e.g. development, testing, staging etc. And for each environment, few things changes bases on environemnt variable like application name, api endpoints etc.

To build the application for different environemnts, just run:

    yarn build:{environment}

A default configuration for some commonly used environemnts is added.

Supported {environments} are:

    yarn build:testing

    yarn build:staging

    yarn build:production


To add a new environment {e.g. environment_new}, create a `.env.{environment_new}` file in the root project and add `"build:{environment_new}": "REACT_APP_ENV={environment_new} npm run build",` into your `package.json`

### CAUTION

This is an application created with create-react-app and in create-react-app, when we run `yarn build`, **NODE_ENV** is set to production. So for each build, **process.env.NODE_ENV** will be set to production. To do any environment specific work, use **process.env.REACT_APP_ENV** which is automatically set your building environment like testing, staging. While developing the application (`yarn start`), **process.env.NODE_ENV** and **REACT_APP_ENV** both are set to *development*
