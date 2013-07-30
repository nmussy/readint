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