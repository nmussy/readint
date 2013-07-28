/*
 *  Copyright 2013 Jimmy Gaussen
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
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
