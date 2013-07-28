module.exports = {
	'splitter' : /\s|\sy/,
	'filters' : [[/s$/,''], [/[á]/, 'a'], [/[é]/, 'e'], [/[ú]/, 'u'], [/[ó]/, 'o'], [/[ñ]/, 'n'], [/[í]/, 'i']],
	'values': [
		{"zero": 0, "uno": 1, "dos": 2, "tres": 3, "cuatro": 4, "cinco": 5, "seis": 6, "siete": 7, "ocho": 8, "nueve": 9, "once": 11, "doze": 12, "trece": 13, "catorce": 14, "quince": 15, "diecisies": 16, "diecisiete": 17, "dieciocho": 18, "diecinueve": 19, "veintiuno": 21, "veintidos": 22, "veintitres": 23, "veinticuatro": 24, "veinticinco": 25, "veintiseis": 26, "veintisiete": 27, "veintiocho": 28, "veintinueve": 29},
		{"diez": 10, "veinte": 20, "treinta": 30, "cuarenta": 40, "cicuenta": 50, "sensta": 60, "setenta": 70, "ochenta": 80, "noventa": 90},
		{"cien": 100, "ciento": 100, "dosciento": 200, "trescientos": 300, "cuatrocientos": 400, "quinientos": 500, "seiscientos": 600, "setecientos": 700, "ochocientos": 800, "novecientos": 900},
		{"mil": 1000},
		{"millon": 1000000, "millone": 1000000},
		{"billon": 1000000000, "billone": 1000000000},
		{"trillon": 1000000000000, "trillone": 1000000000000}
	]
};