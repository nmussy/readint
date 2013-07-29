module.exports = {
	'splitter' : /-|(hundert|tausend|million|milliard|billion)|und(?!ert)|\s/,
	'filters' : [[/ä/, 'a'], [/ö/, 'o'], [/ü/, 'u'], [/ß/, 'ss'], [/[es][ns]?$/, '']],
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