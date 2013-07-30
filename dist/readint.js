/*
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
	if(!isNaN(global = parseInt(str)))
		return global;

	if(typeof locale === 'undefined')
		locale = 'en';
	locale = require('../locales/' + locale);

	if(typeof locale.replace === 'undefined')
		locale.replace = [];
	if(typeof locale.LTRlevels === 'undefined')
		locale.LTRlevels = [];

	if((tokens = _tokenize(str, locale)).length > 0)
		return _readint(tokens, locale);
	return -1;
};

function _readint(tokens, locale) {
	if(tokens.length == 0)
		return -1;
	if(tokens.length == 1)
		return tokens[0].value;

	var highestLevelIndex = -1, highestLevel = -1, lValue, rValue;
	for(var i = 0; i < tokens.length; ++i)
		if(tokens[i].level > highestLevel) {
			highestLevel = tokens[i].level;
			highestLevelIndex = i;
		}

	lValue = _readint(tokens.slice(0, highestLevelIndex), locale);
	if((rValue = _readint(tokens.slice(highestLevelIndex + 1, tokens.length), locale)) == -1)
		rValue = 0;

	if(locale.LTRlevels.indexOf(highestLevel) != -1)
		return (lValue == -1 ? 0 : lValue) + tokens[highestLevelIndex].value + rValue;

	return (lValue == -1 ? 1 : lValue) * tokens[highestLevelIndex].value + rValue;
};

function _tokenize(str, locale) {
	var result = [];

	for(var i = 0, tokens = str.split(locale.split), keywords = _parsekeywords(locale.values);
		 typeof tokens[i] !== 'undefined'; ++i) {

		if((tokens[i] = tokens[i].toLowerCase()).length == 0) {
			tokens.splice(i--, 1);
			continue;
		}

		for(var j = 0; j < locale.replace.length; ++j)
			tokens[i] = tokens[i].replace(locale.replace[j][0], locale.replace[j][1]);

		for(var j = 0; ; ++j)
			if(j >= keywords.length) {
				tokens.splice(i--, 1);
				break;
			} else if(tokens[i] == keywords[j].string) {
				result.push(keywords[j]);
				break;
			}
	}
	return result;
};

function _parsekeywords (values) {
	var keys = [];
	for(var i = 0; i < values.length; ++i)
		for(var key in values[i])
			keys.push({'string': key, 'value': values[i][key], 'level': i});
	return keys;
};

module.exports = readint;
});
require.register("readint/locales/en.js", function(exports, require, module){
module.exports = {
	'split' : /\s|\sand|(?=teen)/,
	'replace' : [[/ies?$/g, 'y'], [/s$/g,'']],
	'LTRlevels': [1],
	'values': [
		{"zero": 0, "one": 1, "two": 2, "three": 3, "thir": 3, "four": 4, "five": 5, "fif": 5, "six": 6, "seven": 7, "eight": 8, "eigh": 8, "nine": 9, "eleven": 11, "twelve": 12},
		{"ten": 10, "teen": 10, "twenty": 20, "thirty": 30, "forty": 40, "fifty": 50, "sixty": 60, "seventy": 70, "eighty": 80, "ninety": 90},
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
	'split' : /[y ]*(?=[^y ]*)(?:(.ientos|veinti|dieci|y| ))(?=[^y ]*)[y ]*/, // /(veinti|dieci|[^y ]+(?=.iento|y| ))/
	'replace' : [[/[y ]/g, ''], [/á/g, 'a'], [/é/g, 'e'], [/ú/g, 'u'], [/ó/g, 'o'], [/ñ/g, 'n'], [/í/g, 'i'], [/quinien/g, 'quincien'], [/millones?/g, 'millon'], [/(un|[cn]ien)t?[oa]s?/g, '$1']],
	'values': [
		{"cero": 0, "un": 1, "dos": 2, "tres": 3, "cuatro": 4, "cinco": 5, "qui": 5, "seis": 6, "siete": 7, "sete": 7, "ocho": 8, "nueve": 9, "nove": 9, "once": 11, "doze": 12, "trece": 13, "catorce": 14, "quince": 15},
		{"diez": 10, "dieci": 10, "veinte": 20, "veinti": 20, "treinta": 30, "cuarenta": 40, "cincuenta": 50, "sesenta": 60, "setenta": 70, "ochenta": 80, "noventa": 90},
		{"cien": 100, "nien": 100},
		{"mil": 1000},
		{"millon": 1000000, "millone": 1000000},
		{"billon": 1000000000, "billone": 1000000000},
		{"trillon": 1000000000000, "trillone": 1000000000000}
	]
};
});
require.register("readint/locales/fr.js", function(exports, require, module){
module.exports = {
	'split' : /(?:^|-|et|\s)(quatre-vingt(?:-dix|s$)?|soixante-dix|(?!-))+/,
	'replace' : [[/s$/g,''], [/[àâ]/g, 'a'], [/[êéèë]/g, 'e'], [/[ùûûü]/g, 'u'], [/ô/g, 'o'], [/ç/g, 'c'], [/[îï]/g, 'i']],
	'values': [
		{"zero": 0, "un": 1, "deux": 2, "troi": 3, "quatre": 4, "cinq": 5, "six": 6, "sept": 7, "huit": 8, "neuf": 9, "onze": 11, "douze": 12, "treize": 13, "quatorze": 14, "quinze": 15, "seize": 16},
		{"dix": 10, "vingt": 20, "trente": 30, "quarente": 40, "cinquante": 50, "soixante": 60, "soixante-dix": 70, "septante": 70, "quatre-vingt": 80, "octante": 80, "quatre-vingt-dix": 90, "nonante": 90},
		{"cent": 100},
		{"mille": 1000},
		{"million": 1000000},
		{"milliard": 1000000000},
		{"billion": 1000000000000}
	]
};
});
require.register("readint/locales/de.js", function(exports, require, module){
module.exports = {
	'split' : /-|(?=hundert|tausend|million|milliard|billion)|und(?!ert)|\s/,
	'replace' : [[/ä/g, 'a'], [/ö/g, 'o'], [/ü/g, 'u'], [/ß/g, 'ss'], [/[es][ns]?$/g, '']],
	'LTRlevels' : [1],
	'values': [
		{"null": 0, "ein": 1, "zwei": 2, "drei": 3, "vier": 4, "fuenf": 5, "sech": 6, "sieben": 7, "acht": 8, "neun": 9, "elf": 11, "zwoelf": 12, "dreizehn": 13, "vierzehn": 14, "fuenfzehn": 15, "sechzehn": 16, "siebzehn": 17, "achtzehn": 18, "neunzehn": 19},
		{"zehn": 10, "zwanzig": 20, "dreissig": 30, "vierzig": 40, "fuenfzig": 50, "sechzig": 60, "siebzig": 70, "achtzig": 80, "neunzig": 90},
		{"hundert": 100},
		{"tausend": 1000},
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