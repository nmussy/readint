/**
 * readint test suite
 */

/**
 * Module Dependencies
 */
var readint = require('../lib/readint');
var assert = require('better-assert');



/*******************************************\
*                  English                  *
\*******************************************/




describe('English:', function() {
  /**
   * Digits and exceptions (Level 0)
   */

  describe('Digits and exceptions (Level 0):', function () {
    it('zero', function () {
      assert(0 == readint('zero', 'en'));
    });
    
    it('one', function () {
      assert(1 == readint('one', 'en'));
    });
    
    it('two', function () {
      assert(2 == readint('two', 'en'));
    });
    
    it('three', function () {
      assert(3 == readint('three', 'en'));
    });
    
    it('four', function () {
      assert(4 == readint('four', 'en'));
    });
    
    it('five', function () {
      assert(5 == readint('five', 'en'));
    });
    
    it('six', function () {
      assert(6 == readint('six', 'en'));
    });
    
    it('seven', function () {
      assert(7 == readint('seven', 'en'));
    });
    
    it('eight', function () {
      assert(8 == readint('eight', 'en'));
    });

    it('nine', function () {
      assert(9 == readint('nine', 'en'));
    });

    it('eleven', function () {
      assert(11 == readint('eleven', 'en'));
    });

    it('twelve', function () {
      assert(12 == readint('twelve', 'en'));
    });
  });

  /**
   * Tens (Level 1)
   */

  describe('Tens (Level 1):', function () {
    it('ten', function () {
      assert(10 == readint('ten', 'en'));
    });

    it('thirteen', function () {
      assert(13 == readint('thirteen', 'en'));
    });
    
    it('fourteen', function () {
      assert(14 == readint('fourteen', 'en'));
    });
    
    it('fifteen', function () {
      assert(15 == readint('fifteen', 'en'));
    });
    
    it('sixteen', function () {
      assert(16 == readint('sixteen', 'en'));
    });
    
    it('seventeen', function () {
      assert(17 == readint('seventeen', 'en'));
    });
    
    it('eighteen', function () {
      assert(18 == readint('eighteen', 'en'));
    });
    
    it('nineteen', function () {
      assert(19 == readint('nineteen', 'en'));
    });
    
    it('twenty', function () {
      assert(20 == readint('twenty', 'en'));
    });

    it('twenty one', function () {
      assert(21 == readint('twenty one', 'en'));
    });
    
    it('thirty', function () {
      assert(30 == readint('thirty', 'en'));
    });

    it('thirty nine', function () {
      assert(39 == readint('thirty nine', 'en'));
    });

    it('forty', function () {
      assert(40 == readint('forty', 'en'));
    });

    it('fifty', function () {
      assert(50 == readint('fifty', 'en'));
    });

    it('fifty seven', function () {
      assert(57 == readint('fifty seven', 'en'));
    });

    it('sixty', function () {
      assert(60 == readint('sixty', 'en'));
    });

    it('sixty three', function () {
      assert(63 == readint('sixty three', 'en'));
    });

    it('seventy', function () {
      assert(70 == readint('seventy', 'en'));
    });

    it('eighty', function () {
      assert(80 == readint('eighty', 'en'));
    });

    it('ninety', function () {
      assert(90 == readint('ninety', 'en'));
    });

    it('ninety nine', function () {
      assert(99 == readint('ninety nine', 'en'));
    });
  });



  /**
   * Hundreds (Level 2)
   */

  describe('Hundreds (Level 2):', function () {
    it('one hundred', function () {
      assert(100 == readint('one hundred', 'en'));
    });
    
    it('a hundred', function () {
      assert(100 == readint('a hundred', 'en'));
    });

    it('hundred', function () {
      assert(100 == readint('hundred', 'en'));
    });
    
    it('two hundred', function () {
      assert(200 == readint('two hundred', 'en'));
    });
        
    it('five hundred and ninety six', function () {
      assert(596 == readint('five hundred and ninety six', 'en'));
    });
    
    it('seventeen hundred', function () {
      assert(1700 == readint('seventeen hundred', 'en'));
    });
    
    it('zero hundred and five', function () {
      assert(5 == readint('zero hundred and five', 'en'));
    });

    it('nine hundred ninety nine', function () {
      assert(999 == readint('nine hundred ninety nine', 'en'));
    });
  });

  /**
   * Thousands (Level 3)
   */

  describe('Thousands (Level 3):', function () {
    it('one thousand', function () {
      assert(1000 == readint('one thousand', 'en'));
    });
    
    it('a thousand', function () {
      assert(1000 == readint('a thousand', 'en'));
    });

    it('thousand', function () {
      assert(1000 == readint('thousand', 'en'));
    });
    
    it('two thousand', function () {
      assert(2000 == readint('two thousand', 'en'));
    });
    
    it('fourteen thousand', function () {
      assert(14000 == readint('fourteen thousand', 'en'));
    });
        
    it('eighty six thousand and five hundred twenty', function () {
      assert(86520 == readint('eighty six thousand and five hundred twenty', 'en'));
    });
    
    it('ninety nine thousand nine hundred ninety nine', function () {
      assert(99999 == readint('ninety nine thousand nine hundred ninety nine', 'en'));
    });
  });

  /**
   * Millions (Level 4)
   */

  describe('Millions (Level 4):', function () {
    it('one million', function () {
      assert(1000000 == readint('one million', 'en'));
    });
    
    it('a million', function () {
      assert(1000000 == readint('a million', 'en'));
    });

    it('million', function () {
      assert(1000000 == readint('million', 'en'));
    });
    
    it('two millions', function () {
      assert(2000000 == readint('two millions', 'en'));
    });
    
    it('seventeen millions', function () {
      assert(17000000 == readint('seventeen millions', 'en'));
    });
    
    it('nine hundred ninety nine millions nine hundred ninety nine thousand nine hundred ninety nine', function () {
      assert(999999999 == readint('nine hundred ninety nine millions nine hundred ninety nine thousand nine hundred ninety nine', 'en'));
    });
  });

});




/********************************************\
*                   French                   *
\********************************************/




describe('French:', function() {
  /**
   * Digits and exceptions (Level 0)
   */

  describe('Digits and exceptions (Level 0):', function () {
    it('zéro', function () {
      assert(0 == readint('zéro', 'fr'));
    });
    
    it('un', function () {
      assert(1 == readint('un', 'fr'));
    });
    
    it('deux', function () {
      assert(2 == readint('deux', 'fr'));
    });
    
    it('trois', function () {
      assert(3 == readint('trois', 'fr'));
    });
    
    it('quatre', function () {
      assert(4 == readint('quatre', 'fr'));
    });
    
    it('cinq', function () {
      assert(5 == readint('cinq', 'fr'));
    });
    
    it('six', function () {
      assert(6 == readint('six', 'fr'));
    });
    
    it('sept', function () {
      assert(7 == readint('sept', 'fr'));
    });
    
    it('huit', function () {
      assert(8 == readint('huit', 'fr'));
    });

    it('neuf', function () {
      assert(9 == readint('neuf', 'fr'));
    });

    it('onze', function () {
      assert(11 == readint('onze', 'fr'));
    });

    it('douze', function () {
      assert(12 == readint('douze', 'fr'));
    });

    it('treize', function () {
      assert(13 == readint('treize', 'fr'));
    });

    it('quatorze', function () {
      assert(14 == readint('quatorze', 'fr'));
    });

    it('quinze', function () {
      assert(15 == readint('quinze', 'fr'));
    });

    it('seize', function () {
      assert(16 == readint('seize', 'fr'));
    });
  });

  /**
   * Tens (Level 1)
   */

  describe('Tens (Level 1):', function () {
    it('dix', function () {
      assert(10 == readint('dix', 'fr'));
    });

    it('dix-sept', function () {
      assert(17 == readint('dix-sept', 'fr'));
    });
    
    it('dix-huit', function () {
      assert(18 == readint('dix-huit', 'fr'));
    });
    
    it('dix-neuf', function () {
      assert(19 == readint('dix-neuf', 'fr'));
    });
    
    it('vingt', function () {
      assert(20 == readint('vingt', 'fr'));
    });

    it('vingt-et-un', function () {
      assert(21 == readint('vingt-et-un', 'fr'));
    });
    
    it('trente', function () {
      assert(30 == readint('trente', 'fr'));
    });

    it('trente-neuf', function () {
      assert(39 == readint('trente-neuf', 'fr'));
    });

    it('quarante', function () {
      assert(40 == readint('quarante', 'fr'));
    });

    it('cinquante', function () {
      assert(50 == readint('cinquante', 'fr'));
    });

    it('cinquante-sept', function () {
      assert(57 == readint('cinquante-sept', 'fr'));
    });

    it('soixante', function () {
      assert(60 == readint('soixante', 'fr'));
    });

    it('soixante-trois', function () {
      assert(63 == readint('soixante-trois', 'fr'));
    });

    it('soixante-dix', function () {
      assert(70 == readint('soixante-dix', 'fr'));
    });

    it('septante', function () {
      assert(70 == readint('septante', 'fr'));
    });

    it('soixante-dix-sept', function () {
      assert(77 == readint('soixante-dix-sept', 'fr'));
    });

    it('quatre-vingt', function () {
      assert(80 == readint('quatre-vingt', 'fr'));
    });

    it('octante', function () {
      assert(80 == readint('octante', 'fr'));
    });

    it('quatre-vingt-trois', function () {
      assert(83 == readint('quatre-vingt-trois', 'fr'));
    });

    it('quatre-vingt-dix', function () {
      assert(90 == readint('quatre-vingt-dix', 'fr'));
    });

    it('nonante', function () {
      assert(90 == readint('nonante', 'fr'));
    });

    it('quatre-vingt-onze', function () {
      assert(91 == readint('quatre-vingt-onze', 'fr'));
    });

    it('quatre-vingt-douze', function () {
      assert(92 == readint('quatre-vingt-douze', 'fr'));
    });
    
    it('quatre-vingt-treize', function () {
      assert(93 == readint('quatre-vingt-treize', 'fr'));
    });
    
    it('quatre-vingt-quatorze', function () {
      assert(94 == readint('quatre-vingt-quatorze', 'fr'));
    });
    
    it('quatre-vingt-quinze', function () {
      assert(95 == readint('quatre-vingt-quinze', 'fr'));
    });
    
    it('quatre-vingt-seize', function () {
      assert(96 == readint('quatre-vingt-seize', 'fr'));
    });

    it('quatre-vingt-dix-neuf', function () {
      assert(99 == readint('quatre-vingt-dix-neuf', 'fr'));
    });

    it('quatre vingt dix neuf', function () {
      assert(99 == readint('quatre vingt dix neuf', 'fr'));
    });

    it('nonante neuf', function () {
      assert(99 == readint('nonante neuf', 'fr'));
    });
  });


  /**
   * Hundreds (Level 2)
   */

  describe('Hundreds (Level 2):', function () {
    it('cent', function () {
      assert(100 == readint('cent', 'fr'));
    });
    
    it('deux-cent', function () {
      assert(200 == readint('deux-cent', 'fr'));
    });
        
    it('cinq-cent-quatre-vingt-seize', function () {
      assert(596 == readint('cinq-cent-quatre-vingt-seize', 'fr'));
    });
    
    it('dix-sept-cent', function () {
      assert(1700 == readint('dix-sept-cent', 'fr'));
    });
    
    it('zéro cent-et-cinq', function () {
      assert(5 == readint('zéro cent-et-cinq', 'fr'));
    });

    it('neuf-cent-quatre-vingt-dix-neuf', function () {
      assert(999 == readint('neuf-cent-quatre-vingt-dix-neuf', 'fr'));
    });
  });

  /**
   * Thousands (Level 3)
   */

  describe('Thousands (Level 3):', function () {
    it('mille', function () {
      assert(1000 == readint('mille', 'fr'));
    });
    
    it('deux-mille', function () {
      assert(2000 == readint('deux-mille', 'fr'));
    });
    
    it('quatorze-mille', function () {
      assert(14000 == readint('quatorze-mille', 'fr'));
    });
        
    it('quatre-vingt-six-mille-cinq-cent-vingt', function () {
      assert(86520 == readint('quatre-vingt-six-mille-cinq-cent-vingt', 'fr'));
    });
    
    it('quatre-vingt-dix-neuf-mille-neuf-cent-quatre-vingt-dix-neuf', function () {
      assert(99999 == readint('quatre-vingt-dix-neuf-mille-neuf-cent-quatre-vingt-dix-neuf', 'fr'));
    });
  });

  /**
   * Millions (Level 4)
   */

  describe('Millions (Level 4):', function () {
    it('un million', function () {
      assert(1000000 == readint('un million', 'fr'));
    });

    it('deux-millions', function () {
      assert(2000000 == readint('deux-millions', 'fr'));
    });

    it('dix-sept-millions', function () {
      assert(17000000 == readint('dix-sept-millions', 'fr'));
    });
    
    it('neuf-cent-quatre-vingt-dix-neuf-millions-neuf-cent-quatre-vingt-dix-neuf-mille-neuf-cent-quatre-vingt-dix-neuf', function () {
      assert(999999999 == readint('neuf-cent-quatre-vingt-dix-neuf-millions-neuf-cent-quatre-vingt-dix-neuf-mille-neuf-cent-quatre-vingt-dix-neuf', 'fr'));
    });
    
    it('neuf cent quatre vingt dix neuf millions neuf cent quatre vingt dix neuf mille neuf cent quatre vingt dix neuf', function () {
      assert(999999999 == readint('neuf cent quatre vingt dix neuf millions neuf cent quatre vingt dix neuf mille neuf cent quatre vingt dix neuf', 'fr'));
    });
  });

});




/*******************************************\
*                  Spanish                  *
\*******************************************/




describe('Spanish:', function() {
  /**
   * Digits and exceptions (Level 0)
   */

  describe('Digits and exceptions (Level 0):', function () {
    it('cero', function () {
      assert(0 == readint('cero', 'es'));
    });
    
    it('un', function () {
      assert(1 == readint('un', 'es'));
    });
        
    it('uno', function () {
      assert(1 == readint('uno', 'es'));
    });    
    
    it('una', function () {
      assert(1 == readint('una', 'es'));
    });
    
    it('dos', function () {
      assert(2 == readint('dos', 'es'));
    });
    
    it('tres', function () {
      assert(3 == readint('tres', 'es'));
    });
    
    it('cuatro', function () {
      assert(4 == readint('cuatro', 'es'));
    });
    
    it('cinco', function () {
      assert(5 == readint('cinco', 'es'));
    });
    
    it('seis', function () {
      assert(6 == readint('seis', 'es'));
    });
    
    it('siete', function () {
      assert(7 == readint('siete', 'es'));
    });
    
    it('ocho', function () {
      assert(8 == readint('ocho', 'es'));
    });

    it('nueve', function () {
      assert(9 == readint('nueve', 'es'));
    });

    it('once', function () {
      assert(11 == readint('once', 'es'));
    });

    it('doze', function () {
      assert(12 == readint('doze', 'es'));
    });

    it('trece', function () {
      assert(13 == readint('trece', 'es'));
    });

    it('catorce', function () {
      assert(14 == readint('catorce', 'es'));
    });

    it('quince', function () {
      assert(15 == readint('quince', 'es'));
    });
  });

  /**
   * Tens (Level 1)
   */

  describe('Tens (Level 1):', function () {    
    it('diez', function () {
      assert(10 == readint('diez', 'es'));
    });

    it('diecisiete', function () {
      assert(17 == readint('diecisiete', 'es'));
    });
    
    it('dieciocho', function () {
      assert(18 == readint('dieciocho', 'es'));
    });
    
    it('diecinueve', function () {
      assert(19 == readint('diecinueve', 'es'));
    });
    
    it('veinte', function () {
      assert(20 == readint('veinte', 'es'));
    });
    
    it('veintiuno', function () {
      assert(21 == readint('veintiuno', 'es'));
    });
    
    it('veintidós', function () {
      assert(22 == readint('veintidós', 'es'));
    });
    
    it('veintitrés', function () {
      assert(23 == readint('veintitrés', 'es'));
    });
    
    it('veinticuatro', function () {
      assert(24 == readint('veinticuatro', 'es'));
    });
    
    it('veinticinco', function () {
      assert(25 == readint('veinticinco', 'es'));
    });
    
    it('veintiséis', function () {
      assert(26 == readint('veintiséis', 'es'));
    });
    
    it('veintisiete', function () {
      assert(27 == readint('veintisiete', 'es'));
    });
    
    it('veintiocho', function () {
      assert(28 == readint('veintiocho', 'es'));
    });
    
    it('veintinueve', function () {
      assert(29 == readint('veintinueve', 'es'));
    });
    
    it('treinta', function () {
      assert(30 == readint('treinta', 'es'));
    });

    it('cuarenta', function () {
      assert(40 == readint('cuarenta', 'es'));
    });

    it('cincuenta', function () {
      assert(50 == readint('cincuenta', 'es'));
    });

    it('sesenta', function () {
      assert(60 == readint('sesenta', 'es'));
    });

    it('setenta', function () {
      assert(70 == readint('setenta', 'es'));
    });

    it('ochenta', function () {
      assert(80 == readint('ochenta', 'es'));
    });

    it('noventa', function () {
      assert(90 == readint('noventa', 'es'));
    });
  });


  /**
   * Hundreds (Level 2)
   */

  describe('Hundreds (Level 2):', function () {
    it('ciento', function () {
      assert(100 == readint('ciento', 'es'));
    });
    
    it('doscientos', function () {
      assert(200 == readint('doscientos', 'es'));
    });

    it('trescientos', function () {
      assert(300 == readint('trescientos', 'es'));
    });
    
    it('cuatrocientos', function () {
      assert(400 == readint('cuatrocientos', 'es'));
    });
    
    it('quinientos', function () {
      assert(500 == readint('quinientos', 'es'));
    });
    
    it('seiscientos', function () {
      assert(600 == readint('seiscientos', 'es'));
    });
    
    it('setecientos', function () {
      assert(700 == readint('setecientos', 'es'));
    });
    
    it('ochocientos', function () {
      assert(800 == readint('ochocientos', 'es'));
    });
    
    it('novecientos', function () {
      assert(900 == readint('novecientos', 'es'));
    });
        
    it('doscientos cincuenta y uno', function () {
      assert(251 == readint('doscientos cincuenta y uno', 'es'));
    });

    it('novecientos noventa y nueve', function () {
      assert(999 == readint('novecientos noventa y nueve', 'es'));
    });
  });

  /**
   * Thousands (Level 3)
   */

  describe('Thousands (Level 3):', function () {
    it('mil', function () {
      assert(1000 == readint('mil', 'es'));
    });
    
    it('dos mil', function () {
      assert(2000 == readint('dos mil', 'es'));
    });
    
    it('catorce mil', function () {
      assert(14000 == readint('catorce mil', 'es'));
    });
        
    it('ochenta y seis mil quinientos veinte', function () {
      assert(86520 == readint('ochenta y seis mil quinientos veinte', 'es'));
    });
    
    it('noventa y nueve mil novecientos noventa y nueve', function () {
      assert(99999 == readint('noventa y nueve mil novecientos noventa y nueve', 'es'));
    });
  });

  /**
   * Millions (Level 4)
   */

  describe('Millions (Level 4):', function () {
    it('un millón', function () {
      assert(1000000 == readint('un millón', 'es'));
    });

    it('dos millones', function () {
      assert(2000000 == readint('dos millones', 'es'));
    });

    it('diecisiete millones', function () {
      assert(17000000 == readint('diecisiete millones', 'es'));
    });
    
    it('novecientos noventa y nueve millones novecientos noventa y nueve mil y novecientos noventa y nueve', function () {
      assert(999999999 == readint('novecientos noventa y nueve millones novecientos noventa y nueve mil y novecientos noventa y nueve', 'es'));
    });
  });

});




/********************************************\
*                   German                   *
\********************************************/




describe('German:', function() {
  /**
   * Digits and exceptions (Level 0)
   */

  describe('Digits and exceptions (Level 0):', function () {
    it('null', function () {
      assert(0 == readint('null', 'de'));
    });
    
    it('eins', function () {
      assert(1 == readint('eins', 'de'));
    });
    
    it('zwei', function () {
      assert(2 == readint('zwei', 'de'));
    });
    
    it('drei', function () {
      assert(3 == readint('drei', 'de'));
    });
    
    it('vier', function () {
      assert(4 == readint('vier', 'de'));
    });
    
    it('fünf', function () {
      assert(5 == readint('fünf', 'de'));
    });
    
    it('sech', function () {
      assert(6 == readint('sech', 'de'));
    });
    
    it('sieben', function () {
      assert(7 == readint('sieben', 'de'));
    });
    
    it('acht', function () {
      assert(8 == readint('acht', 'de'));
    });

    it('neun', function () {
      assert(9 == readint('neun', 'de'));
    });

    it('elf', function () {
      assert(11 == readint('elf', 'de'));
    });

    it('zwoelf', function () {
      assert(12 == readint('zwoelf', 'de'));
    });
  });

  /**
   * Tens (Level 1)
   */

  describe('Tens (Level 1):', function () {    
    it('zehn', function () {
      assert(10 == readint('zehn', 'de'));
    });

    it('dreizehn', function () {
      assert(13 == readint('dreizehn', 'de'));
    });

    it('vierzehn', function () {
      assert(14 == readint('vierzehn', 'de'));
    });

    it('fünfzehn', function () {
      assert(15 == readint('fünfzehn', 'de'));
    });

    it('sechzehn', function () {
      assert(16 == readint('sechzehn', 'de'));
    });

    it('siebzehn', function () {
      assert(17 == readint('siebzehn', 'de'));
    });
    
    it('achtzehn', function () {
      assert(18 == readint('achtzehn', 'de'));
    });
    
    it('neunzehn', function () {
      assert(19 == readint('neunzehn', 'de'));
    });
    
    it('zwanzig', function () {
      assert(20 == readint('zwanzig', 'de'));
    });
    
    it('eineundzwanzig', function () {
      assert(21 == readint('eineundzwanzig', 'de'));
    });
    
    it('dreißig', function () {
      assert(30 == readint('dreißig', 'de'));
    });
    
    it('neununddreißig', function () {
      assert(39 == readint('neununddreißig', 'de'));
    });

    it('vierzig', function () {
      assert(40 == readint('vierzig', 'de'));
    });

    it('fünfzig', function () {
      assert(50 == readint('fünfzig', 'de'));
    });

    it('sechzig', function () {
      assert(60 == readint('sechzig', 'de'));
    });

    it('dreiundsechzig', function () {
      assert(63 == readint('dreiundsechzig', 'de'));
    });

    it('siebzig', function () {
      assert(70 == readint('siebzig', 'de'));
    });

    it('achtzig', function () {
      assert(80 == readint('achtzig', 'de'));
    });

    it('neunzig', function () {
      assert(90 == readint('neunzig', 'de'));
    });

    it('neunundneunzig', function () {
      assert(99 == readint('neunundneunzig', 'de'));
    });
  });


  /**
   * Hundreds (Level 2)
   */

  describe('Hundreds (Level 2):', function () {
    it('hundert', function () {
      assert(100 == readint('hundert', 'de'));
    });

    it('einhundert', function () {
      assert(100 == readint('einhundert', 'de'));
    });
    
    it('zweihundert', function () {
      assert(200 == readint('zweihundert', 'de'));
    });

    it('dreihundert', function () {
      assert(300 == readint('dreihundert', 'de'));
    });
    
    it('vierhundert', function () {
      assert(400 == readint('vierhundert', 'de'));
    });
    
    it('fünfhundert', function () {
      assert(500 == readint('fünfhundert', 'de'));
    });
    
    it('fünfhundertsechsundneunzig', function () {
      assert(596 == readint('fünfhundertsechsundneunzig', 'de'));
    });
    
    it('sechshundert', function () {
      assert(600 == readint('sechshundert', 'de'));
    });
    
    it('siebenhundert', function () {
      assert(700 == readint('siebenhundert', 'de'));
    });
    
    it('achthundert', function () {
      assert(800 == readint('achthundert', 'de'));
    });
    
    it('neunhundert', function () {
      assert(900 == readint('neunhundert', 'de'));
    });
    
    it('siebzehnhundert', function () {
      assert(1700 == readint('siebzehnhundert', 'de'));
    });

    it('neunhundertneunundneunzig', function () {
      assert(999 == readint('neunhundertneunundneunzig', 'de'));
    });
  });

  /**
   * Thousands (Level 3)
   */

  describe('Thousands (Level 3):', function () {
    it('tausend', function () {
      assert(1000 == readint('tausend', 'de'));
    });

    it('eintausend', function () {
      assert(1000 == readint('eintausend', 'de'));
    });
    
    it('zweitausend', function () {
      assert(2000 == readint('zweitausend', 'de'));
    });
    
    it('vierzehntausend', function () {
      assert(14000 == readint('vierzehntausend', 'de'));
    });
        
    it('sechsundachtzigtausendfünfhundertzwanzig', function () {
      assert(86520 == readint('sechsundachtzigtausendfünfhundertzwanzig', 'de'));
    });
    
    it('neunundneunzigtausendneunhundertneunundneunzig', function () {
      assert(99999 == readint('neunundneunzigtausendneunhundertneunundneunzig', 'de'));
    });
  });

  /**
   * Millions (Level 4)
   */

  describe('Millions (Level 4):', function () {
    it('Million', function () {
      assert(1000000 == readint('Million', 'de'));
    });

    it('eine Million', function () {
      assert(1000000 == readint('eine Million', 'de'));
    });

    it('zwei Millionen', function () {
      assert(2000000 == readint('zwei Millionen', 'de'));
    });

    it('siebzehn Millionen', function () {
      assert(17000000 == readint('siebzehn Millionen', 'de'));
    });
    
    it('neunhundertneunundneunzig Millionen neunhundertneunundneunzigtausendneunhundertneunundneunzig', function () {
      assert(999999999 == readint('neunhundertneunundneunzig Millionen neunhundertneunundneunzigtausendneunhundertneunundneunzig', 'de'));
    });
  });

});