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