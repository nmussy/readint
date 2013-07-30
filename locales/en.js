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