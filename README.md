# Greet and Calculate

## Configuration

Configure the root of your repository with the following files and directories.
Thoughtfully name and organize any additional configuration or module files.

* **README.md** - contains your documentation
* **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file
* **.eslintrc** - contains the course linter configuration
* **.travis.yml** - contains your travis testing instructions
* **package.json** - contains npm package config 
  * jest and eslint must be dependencies
  * create a `lint` script for running eslint `"lint": "eslint **/.js"`
  * create a `test` script for running tests
* **lib/** - contains module definitions
* **__test__/** - contains unit tests

## Testing

### Greet Module Tests

* Write a test that expects the greet module to throw an error when you supply non-string values
* Write a test the expects the greet module to return `'hello world'`
  * This should happen when invoked with `'world'` as the first argument

### Arithmetic Module Tests

* Test each method for proper use (invoked with number arguments)
* Test each method for inproper use (invoked with one or more non-number arguments)

## Feature Tasks

### Greet Module

Create a NodeJS module in the `lib` directory named `greet.js`.  This module should export a single function.
* The `greet` function should have a single parameter (arity of one) that should expect a string as it's input
* The `greet` function should return the input name, concatenated with "hello ": eg. ("hello susan")
* The `greet` function should throw an error if the input is not a string

### Arithmetic Module

Create a NodeJS module in the `lib` directory named `arithmetic.js`. This module exports an object and should have
`add` and `sub` methods that implement addition and subtraction.

* The `add` method should have 2 parameters (airty of two)
  * `if` either argument is a non-number the function should throw an error
  * `else` return the sum of the 2 numbers
* The `sub` method should have 2 parameters (airty of two)
  * `if` either argument is a non-number the function should throw an error
  * `else` return the second parameter subtracted from the first parameter

### Documentation

In your README.md file, describe the exported values of each module defined in your `lib` directory. Every function
description should include it's airty (expected number of parameters), the expected data for each parameter
(data-type and limitations), and the expected output behavior (for both valid and invalid use). Feel free to include
any additional information that you would like.

## Challenge Tasks

### Greet Module

* The `greet` function should take a salutation as an optional input to be concatenated with the input name:
eg. ("Greetings susan").

### Arithmetic Module

* The `multiply` method should have 2 parameters (airty of two)
  * `if` either argument is a non-number the function should throw an error
  * `else` return the 2 numbers multiplied by eachother
* The `divide` method should have 2 parameters (airty of two)
  * `if` either argument is a non-number the function should throw an error
  * `if` the second argument is `0` the function should throw an error
  * `else` return the first number divided by the second
