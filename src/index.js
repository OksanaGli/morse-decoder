const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let ArrayFromExpr = [];
    while (expr.length) {
    let substring = expr.substring(0, 10);
    expr = expr.substring(10);
      
    if (substring === '**********') {
      ArrayFromExpr.push(' ');      
    } else {
      ArrayFromExpr.push(substring);          
    }
  }  
  
  const getChangeArray = (array) => {
    return array.map(item => item.match(/..?/g));    
  }
  let changeArray = getChangeArray(ArrayFromExpr);
 

  const getFilterArray = (array) => {
    return array.map(item => item.filter(item => item !== '00'));
  }; 
  let filterArray = getFilterArray(changeArray);
  

  let dictionary = {
    '10': '.',
    '11': '-',
  };

  const getMorseMeaning = (array) => {
    return array.map(item => item.map(item => dictionary[item] || item));
  }
  let morseCode = getMorseMeaning(filterArray);
  
  
  const getExprOfMorseCode = (array) => {
    return array.map(item => item.join(''));
  }
  let morseCodeExpr = getExprOfMorseCode(morseCode);
   
  
  const getExprOfMorseTable = (array) => {
    return array.map(item => MORSE_TABLE[item] || item);
  }
  let result = getExprOfMorseTable(morseCodeExpr);
    
  return result.join('');
}

decode("0000101110000011111100101110100010111010000000101000000011100000111110**********00001010100011101110000011111100101111100000000010**********000010101000111011100010101010000011111100001111110010111010");

module.exports = {
    decode
}