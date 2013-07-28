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