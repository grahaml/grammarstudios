# grammarstudios.com source

## What is this?

* A simple express app to make a really simple website about myself
* The groundwork for an application to house experiments
* An experiment itself, and a playground to learn more about Node, Express, and ES6

## How to?

1. `git clone` this repo
2. `npm install` to get deps
3. `npm run less` to build the CSS
4. `npm start` to run the development server

*Note:* Requires node >= 4.0.0 due to using ES syntax throughout.

## Made from?

Uses `node` and `express` on the back-end. Currently using `ejs` templates to render the front-end, but infrastructure is in place to work with `jade` and experiment with `express-react-views`. You can change the const `viewEngine` to be either `"ejs"`, `"jade"`, or `"jsx"` inside `app.js`.
