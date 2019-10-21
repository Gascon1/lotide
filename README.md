# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @gascon-m/lotide`

**Require it:**

`const _ = require('@gascon-m/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head` : returns the first item of an array
* `tail` : returns all but the first item of an array
* `middle` : returns the middle item of the array, if the array is of even length, returns two items
* `assertArraysEqual` : formats a proper answer after using eqArrays
* `assertEqual` : check if two items are equal, does not work on arrays or objects (see assertArraysEqual or assertObjectEqual)
* `assertObjectEqual` : formats a proper answer after using eqObjects
* `countLetters` : count the letters in a string
* `countOnly` : counts the occurence of a specified item in an array of strings
* `eqArrays`: checks if two arrays are equal
* `eqObjects` : checks if two objects are equal
* `findKey` : returns the value with the specified key
* `findKeyByValue` : returns the key with the specified value
* `flatten` : returns a multiple-level array as a single level array
* `letterPositions` : takes a string and returns an object with letters as keys and values are the index at which the letters appear 
*  `maps` : accepts an array and a callback function and returns what was asked of the callback function 
* `takeUntil`: accepts an array and a callback function. Returns an array with all the values until the value of the callback function is reached.
* `without` : accepts an array and an item. Returns the array with the specified item removed from it.