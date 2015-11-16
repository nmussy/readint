module.exports = {
	'split' : /et|\s|-/,
	'replace' : [[/s$/g,''], [/[àâ]/g, 'a'], [/[êéèë]/g, 'e'], [/[ùûûü]/g, 'u'], [/ô/g, 'o'], [/ç/g, 'c'], [/[îï]/g, 'i']],
	'LTRlevels' : [],
	'values': [
		{"zero": 0, "un": 1, "deux": 2, "troi": 3, "quatre": 4, "cinq": 5, "six": 6, "sept": 7, "huit": 8, "neuf": 9, "onze": 11, "douze": 12, "treize": 13, "quatorze": 14, "quinze": 15, "seize": 16},
		{"dix": 10, "vingt": 20, "trente": 30, "quarante": 40, "cinquante": 50, "soixante": 60, "soixante-dix": 70, "septante": 70, "quatre-vingt": 80, "octante": 80, "quatre-vingt-dix": 90, "nonante": 90},
		{"cent": 100},
		{"mille": 1000},
		{"million": 1000000},
		{"milliard": 1000000000},
		{"billion": 1000000000000}
	]
};