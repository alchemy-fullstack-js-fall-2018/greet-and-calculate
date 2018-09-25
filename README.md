# Greet and Calculate

Extremely proud of these advanced calculation tools.

## Table of Contents
* [greet.js](#greet.js)
    * [greet](#greet)
* [arithmetic.js](#arithmetic.js)
    * [add](#add)
    * [sub](#sub)

<a name="greet.js"/>

## greet.js

<a name="greet"/>

### Function: greet

#### Overview

* greet is a function that returns a greeting

#### Syntax

* greet(name, [,options])

#### Arguments

* `name`: string
* `options`: object
    * `object.salutation`: string

#### Return value

* if no salutation is supplied:
    * 'hello \<name>'
* if a salutation is supplied:
    * '\<salutation> \<name>'

#### Errors

* throws error if `name` is not a string


<a name="arithmetic.js"/>

## arithmetic.js

<a name="add"/>

### Function: add

#### Overview

* add is a function that returns a sum of two numbers

#### Syntax

* add(num1, num2)

#### Arguments

* `num1`: number
* `num2`: number

#### Return value

* \<sum>, a number

#### Errors

* throws error if `num1` or `num1` are not numbers

<a name="sub"/>

### Function: sub

#### Overview

* sub is a function that returns a difference of two numbers

#### Syntax

* sub(num1, num2)

#### Arguments

* `num1`: number
* `num2`: number

#### Return value

* \<diff>, a number

#### Errors

* throws error if `num1` or `num1` are not numbers

<a name="multiply"/>

### Function: multiply

#### Overview

* multiply is a function that returns a product of two numbers

#### Syntax

* multiply(num1, num2)

#### Arguments

* `num1`: number
* `num2`: number

#### Return value

* \<prod>, a number

#### Errors

* throws error if `num1` or `num1` are not numbers

<a name="divide"/>

### Function: divide

#### Overview

* divide is a function that returns a quotient of two numbers

#### Syntax

* divide(num1, num2)

#### Arguments

* `num1`: number
* `num2`: number

#### Return value

* \<quot>, a number

#### Errors

* throws error if `num1` or `num1` are not numbers
* throws error if `num2` is `0`

