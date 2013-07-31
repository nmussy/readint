readint [![Build Status](https://travis-ci.org/nmussy/readint.png?branch=master)](https://travis-ci.org/nmussy/readint)
=======

Node application for a localized written number parsing, thought for being easily translated.

Examples
--------

You can check out a demonstration of the component on [its webpage](http://nmussy.github.io/readint/).

Installation
------------

### Using NPM (Node Packaged Modules)

	npm install readint

### Using [component](https://github.com/component/component)

	npm install component
	component install nmussy/readint

### Standalone JavaScript version (component'ed)

Download either the [full](dist/readint.js) or [minified](dist/readint.min.js) version in the [dist](https://github.com/nmussy/readint/tree/master/dist) folder, and include it to your web page.

Usage
-----

### readint(str[, locale])

Here's a list of the supported locales:

* `en` English (default)
* `fr` French
* `es` Spanish
* `de` German

Testing suite
-------------

##### 230/230 passing

    make test

Translation files structure
---------------------------

All fields are mandatory, even if empty.

* `split` (string, regex) – Used to `.split()` the input string into number tokens.
* `replace` (array) – Contains arrays used as parameters by the `.replace()` function :
    * (string, regex) – Value that will be replaced.
    * (string) – Value that will replace the searched value.
* `LTRlevels` (array) – Contains the levels that have to be read from left to right (for an explanation of what a level is, see the next field.) 
    e.g., in English, the Level 1 is read from left to right (seventeen: `7 + 10`), unlike French (dix-sept: `10 + 7`)
* `values` (array) – Contains the written numbers of the language, ordered by ascending level. To simplify the translation and the execution, the given string number is tokenized, and each token is assigned its numbered value, and the level in which it is contained. Each level contains the level beneath it. The level 0 is used for digits and exceptions.
    * (object) – `{"stringValue": integerValue}`

Licence
-------

MIT