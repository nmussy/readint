module.exports = {
	'splitter' : /\s|et|-(?=[^vingt|dix])/,
	'filters' : [[/s$/,''], [/[àâ]/, 'a'], [/[êéèë]/, 'e'], [/[ùûûü]/, 'u'], [/[ô]/, 'o'], [/[ç]/, 'c'], [/[îï]/, 'i']],
	'values': [
		{"zero": 0, "un": 1, "deux": 2, "trois": 3, "quatre": 4, "cinq": 5, "six": 6, "sept": 7, "huit": 8, "neuf": 9, "onze": 11, "douze": 12, "treize": 13, "quatorze": 14, "quinze": 15, "seize": 16},
		{"dix": 10, "vingt": 20, "trente": 30, "quarente": 40, "cinquante": 50, "soixante": 60, "soixante-dix": 70, "quatre-vingt": 80, "quatre-vingt-dix": 90},
		{"cent": 100},
		{"mille": 1000},
		{"million": 1000000},
		{"milliard": 1000000000},
		{"billion": 1000000000000}
	]
};