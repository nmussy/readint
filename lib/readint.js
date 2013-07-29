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

	if((tokens = tokenizeString(str, locale)).length > 0)
		return parseInteger(tokens, locale);
	return -1;
};

function parseInteger(tokens, locale) {
	if(tokens.length == 0)
		return -1;
	if(tokens.length == 1)
		return tokens[0].value;

	var highestLevelIndex = -1, lValue, rValue;
	for(var i = 0, highestLevel = -1; i < tokens.length; ++i)
		if(tokens[i].level > highestLevel) {
			highestLevel = tokens[i].level;
			highestLevelIndex = i;
		}

	if((lValue = parseInteger(tokens.slice(0, highestLevelIndex))) == -1)
		lValue = 1;
	if((rValue = parseInteger(tokens.slice(highestLevelIndex + 1, tokens.length))) == -1)
		rValue = 0;

	if(typeof locale.LTRlevels !== 'undefined' && locale.LTRlevels.indexOf(highestLevelIndex) != -1)
		return lValue + tokens[highestLevelIndex].value + rValue;

	return lValue * tokens[highestLevelIndex].value + rValue;
};

function tokenizeString(str, locale) {
	var tokens = str.split(locale.splitter);
	var keywords = getKeywords(locale.values);
	
	var result = [];
	if(typeof locale.filters === 'undefined')
		locale.filters = [];

	for(var i = 0; typeof tokens[i] !== 'undefined'; ++i) {
		if((tokens[i] = tokens[i].toLowerCase()).length == 0) {
			tokens.splice(i--, 1);
			continue;
		}

		for(var j = 0; j < locale.filters.length; ++j)
			tokens[i] = tokens[i].replace(locale.filters[j][0], locale.filters[j][1]);

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

function getKeywords (values) {
	var keys = [];
	for(var i = 0; i < values.length; ++i)
		for(var key in values[i])
			keys.push({'string': key, 'value': values[i][key], 'level': i});
	return keys;
};

module.exports = readint;