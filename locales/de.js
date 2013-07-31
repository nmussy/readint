module.exports = {
	'split' : /-|(zehn|hundert|tausend|millione?n?|milliarde?n?|billione?n?|und(?!ert))/,
	'replace' : [[/\s/g, ''], [/ä/g, 'a'], [/ö/g, 'o'], [/ü/g, 'ue'], [/ß/g, 'ss'], [/[es][ns]?(\s|$)/g, '']],
	'LTRlevels' : [1],
	'values': [
		{"null": 0, "ein": 1, "zwei": 2, "drei": 3, "vier": 4, "fuenf": 5, "sech": 6, "sieb": 7, "acht": 8, "neun": 9, "elf": 11, "zwoelf": 12},
		{"zehn": 10, "zwanzig": 20, "dreissig": 30, "vierzig": 40, "fuenfzig": 50, "sechzig": 60, "siebzig": 70, "achtzig": 80, "neunzig": 90},
		{"hundert": 100},
		{"tausend": 1000},
		{"million": 1000000},
		{"milliard": 1000000000},
		{"billion": 1000000000000}
	]
};