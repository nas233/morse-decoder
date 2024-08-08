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
    let decExp = '';
    for (let i = 0; i < expr.length; i+= 10){
        let x = expr.slice(i, i + 10);
        if ( x === '**********'){
            decExp += ' ';
        }else{
            let morse = '';

            for (let j = 0; j < 10; j+= 2){
                let p = x.slice(j, j + 2);
                if ( p === '10'){
                    morse += '.';
                }else if(p === '11'){
                    morse += '-';
                }                     
            }

            decExp += MORSE_TABLE[morse];
        }       

    }
    return decExp
    // write your solution here
}

module.exports = {
    decode
}