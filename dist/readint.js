/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2013 Jimmy Gaussen
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
;(function(){

/**
 * Require the given path.
 *
 * @param {String} path
 * @return {Object} exports
 * @api public
 */

function require(path, parent, orig) {
  var resolved = require.resolve(path);

  // lookup failed
  if (null == resolved) {
    orig = orig || path;
    parent = parent || 'root';
    var err = new Error('Failed to require "' + orig + '" from "' + parent + '"');
    err.path = orig;
    err.parent = parent;
    err.require = true;
    throw err;
  }

  var module = require.modules[resolved];

  // perform real require()
  // by invoking the module's
  // registered function
  if (!module.exports) {
    module.exports = {};
    module.client = module.component = true;
    module.call(this, module.exports, require.relative(resolved), module);
  }

  return module.exports;
}

/**
 * Registered modules.
 */

require.modules = {};

/**
 * Registered aliases.
 */

require.aliases = {};

/**
 * Resolve `path`.
 *
 * Lookup:
 *
 *   - PATH/index.js
 *   - PATH.js
 *   - PATH
 *
 * @param {String} path
 * @return {String} path or null
 * @api private
 */

require.resolve = function(path) {
  if (path.charAt(0) === '/') path = path.slice(1);

  var paths = [
    path,
    path + '.js',
    path + '.json',
    path + '/index.js',
    path + '/index.json'
  ];

  for (var i = 0; i < paths.length; i++) {
    var path = paths[i];
    if (require.modules.hasOwnProperty(path)) return path;
    if (require.aliases.hasOwnProperty(path)) return require.aliases[path];
  }
};

/**
 * Normalize `path` relative to the current path.
 *
 * @param {String} curr
 * @param {String} path
 * @return {String}
 * @api private
 */

require.normalize = function(curr, path) {
  var segs = [];

  if ('.' != path.charAt(0)) return path;

  curr = curr.split('/');
  path = path.split('/');

  for (var i = 0; i < path.length; ++i) {
    if ('..' == path[i]) {
      curr.pop();
    } else if ('.' != path[i] && '' != path[i]) {
      segs.push(path[i]);
    }
  }

  return curr.concat(segs).join('/');
};

/**
 * Register module at `path` with callback `definition`.
 *
 * @param {String} path
 * @param {Function} definition
 * @api private
 */

require.register = function(path, definition) {
  require.modules[path] = definition;
};

/**
 * Alias a module definition.
 *
 * @param {String} from
 * @param {String} to
 * @api private
 */

require.alias = function(from, to) {
  if (!require.modules.hasOwnProperty(from)) {
    throw new Error('Failed to alias "' + from + '", it does not exist');
  }
  require.aliases[to] = from;
};

/**
 * Return a require function relative to the `parent` path.
 *
 * @param {String} parent
 * @return {Function}
 * @api private
 */

require.relative = function(parent) {
  var p = require.normalize(parent, '..');

  /**
   * lastIndexOf helper.
   */

  function lastIndexOf(arr, obj) {
    var i = arr.length;
    while (i--) {
      if (arr[i] === obj) return i;
    }
    return -1;
  }

  /**
   * The relative require() itself.
   */

  function localRequire(path) {
    var resolved = localRequire.resolve(path);
    return require(resolved, parent, path);
  }

  /**
   * Resolve relative to the parent.
   */

  localRequire.resolve = function(path) {
    var c = path.charAt(0);
    if ('/' == c) return path.slice(1);
    if ('.' == c) return require.normalize(p, path);

    // resolve deps by returning
    // the dep in the nearest "deps"
    // directory
    var segs = parent.split('/');
    var i = lastIndexOf(segs, 'deps') + 1;
    if (!i) i = 0;
    path = segs.slice(0, i + 1).join('/') + '/deps/' + path;
    return path;
  };

  /**
   * Check if module is defined at `path`.
   */

  localRequire.exists = function(path) {
    return require.modules.hasOwnProperty(localRequire.resolve(path));
  };

  return localRequire;
};
require.register("readint/bin/readint.js", function(exports, require, module){
module.exports = require('../lib/readint.js');
});
require.register("readint/lib/readint.js", function(exports, require, module){
function readint(str, locale) {
	if(!isNaN(parseInt(str)))
		return parseInt(str);

	if(typeof locale === 'undefined')
		locale = 'en';

	var locale = require('../locales/' + locale);
	var tokens =  tokenizeString(str, locale);


	if(tokens.length > 0)
		return parseInteger(tokens);
	return -1;
};

function parseInteger(tokens) {
	if(tokens.length == 0)
		return -1;
	if(tokens.length == 1)
		return tokens[0].value;

	var highestLevel = -1;
	var highestLevelIndex = -1;
	for(var i = 0; i < tokens.length; ++i) {
		if(tokens[i].value > highestLevel) {
			highestLevel = tokens[i].value;
			highestLevelIndex = i;
		}
	}

	var highestLevelValue = tokens[highestLevelIndex].value;
	var leftHandValue = parseInteger(tokens.slice(0, highestLevelIndex));
	var rightHandValue = parseInteger(tokens.slice(highestLevelIndex + 1, tokens.length));

	return (leftHandValue == -1 ? 1 : leftHandValue) * highestLevelValue + (rightHandValue == -1 ? 0 : rightHandValue); 
};

function tokenizeString(str, locale) {
	var tokens = str.split(locale.splitter);
	var keywords = getKeywords(locale.values);

	var result = [];
	if(typeof locale.filters === 'undefined') {		
		for(var i = 0; ; ++i) {
			if(typeof tokens[i] === 'undefined')
				break;

			if(tokens[i].length == 0) {
				tokens.splice(i--, 1);
				continue;
			}
			for(var j = 0; ; ++j)
				if(typeof keywords[j] === 'undefined') {
					tokens.splice(i--, 1);
					break;
				} else if(tokens[i].toLowerCase() == keywords[j].string){
					result.push(keywords[j]);
					break;	
				}
		}
	} else
		for(var i = 0; ; ++i) {
			if(typeof tokens[i] === 'undefined')
				break;

			if(tokens[i].length == 0) {
				tokens.splice(i--, 1);
				continue;
			}
			tokens[i] = tokens[i].toLowerCase();
			for(var j = 0; j < locale.filters.length; ++j)
				tokens[i] = tokens[i].replace(locale.filters[j][0], locale.filters[j][1]);
			for(var j = 0; ; ++j)
				if(typeof keywords[j] === 'undefined') {
					tokens.splice(i--, 1);
					break;
				} else if(tokens[i] == keywords[j].string) {
					result.push(keywords[j]);
					break;	
				}
		}

	return result;
};

function getKeywords (values) {
	var keys = [];
	for(var i = 0; i < values.length; ++i) {
		for(var key in values[i])
			keys.push({'string': key, 'value': values[i][key], 'level': i});
	}
	return keys;
};

module.exports = readint;
});
require.register("readint/locales/en.js", function(exports, require, module){
module.exports = {
	'splitter' : /\s|\sand/,
	'filters' : [[/s$/,''], [/ies$/, 'y']],
	'values': [
		{"zero": 0, "one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9, "eleven": 11, "twelve": 12, "thirteen": 13, "fourteen": 14, "fifteen": 15, "sixteen": 16, "seventeen": 17, "eighteen": 18, "nineteen": 19},
		{"ten": 10, "twenty": 20, "thirty": 30, "forty": 40, "fifty": 50, "sixty": 60, "seventy": 70, "eighty": 80, "ninety": 90},
		{"hundred": 100},
		{"thousand": 1000},
		{"million": 1000000},
		{"billion": 1000000000},
		{"trillion": 1000000000000}
	]
};
});
require.register("readint/locales/es.js", function(exports, require, module){
module.exports = {
	'splitter' : /\s|\sy/,
	'filters' : [[/s$/,''], [/[á]/, 'a'], [/[é]/, 'e'], [/[ú]/, 'u'], [/[ó]/, 'o'], [/[ñ]/, 'n'], [/[í]/, 'i']],
	'values': [
		{"zero": 0, "uno": 1, "dos": 2, "tres": 3, "cuatro": 4, "cinco": 5, "seis": 6, "siete": 7, "ocho": 8, "nueve": 9, "once": 11, "doze": 12, "trece": 13, "catorce": 14, "quince": 15, "diecisies": 16, "diecisiete": 17, "dieciocho": 18, "diecinueve": 19, "veintiuno": 21, "veintidos": 22, "veintitres": 23, "veinticuatro": 24, "veinticinco": 25, "veintiseis": 26, "veintisiete": 27, "veintiocho": 28, "veintinueve": 29},
		{"diez": 10, "veinte": 20, "treinta": 30, "cuarenta": 40, "cicuenta": 50, "sensta": 60, "setenta": 70, "ochenta": 80, "noventa": 90},
		{"cien": 100, "ciento": 100, "dosciento": 200, "trescientos": 300, "cuatrocientos": 400, "quinientos": 500, "seiscientos": 600, "setecientos": 700, "ochocientos": 800, "novecientos": 900},
		{"mil": 1000},
		{"millon": 1000000, "millone": 1000000},
		{"billon": 1000000000, "billone": 1000000000},
		{"trillon": 1000000000000, "trillone": 1000000000000}
	]
};
});
require.register("readint/locales/fr.js", function(exports, require, module){
module.exports = {
	'splitter' : /\s|et|-(?=[^vingt|dix])/,
	'filters' : [[/s$/,''], [/[àâ]/, 'a'], [/[êéèë]/, 'e'], [/[ùûûü]/, 'u'], [/[ô]/, 'o'], [/[ç]/, 'c'], [/[îï]/, 'i']],
	'values': [
		{"zero": 0, "un": 1, "deux": 2, "troi": 3, "quatre": 4, "cinq": 5, "six": 6, "sept": 7, "huit": 8, "neuf": 9, "onze": 11, "douze": 12, "treize": 13, "quatorze": 14, "quinze": 15, "seize": 16},
		{"dix": 10, "vingt": 20, "trente": 30, "quarente": 40, "cinquante": 50, "soixante": 60, "soixante-dix": 70, "quatre-vingt": 80, "quatre-vingt-dix": 90},
		{"cent": 100},
		{"mille": 1000},
		{"million": 1000000},
		{"milliard": 1000000000},
		{"billion": 1000000000000}
	]
};
});
require.alias("readint/bin/readint.js", "readint/index.js");if (typeof exports == "object") {
  module.exports = require("readint");
} else if (typeof define == "function" && define.amd) {
  define(function(){ return require("readint"); });
} else {
  this["readint"] = require("readint");
}})();