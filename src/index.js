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

function createArrFromStr(str) {
    let arr = [];
    let lastPos = str.length;
    for (let i = 0; i < lastPos; i += 10) {
        arr.push(str.slice(i, i+10));
    }
    return arr;
}

function clearExtraZeroFromItem(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === '*') continue;
        arr[i] = arr[i].slice(arr[i].indexOf('1'));
    }
    return arr;
}

function decodeItemToMorseCode(arr) {
    for (let i = 0; i < arr.length; i++) {
        let str = '';
        for (let j = 0; j < arr[i].length; j += 2) {
            if (arr[i].slice(j, j+2) === '10') {
                str += '.';
            } else if (arr[i].slice(j, j+2) === '11') {
                str += '-';
            } else {
                str = ' ';
            }
        }
        arr[i] = str;
    }
    return arr;
}

function decode(expr) {
    // write your solution here
    let decodedExpr = '';
    let codeList = createArrFromStr(expr);
    clearExtraZeroFromItem(codeList);
    decodeItemToMorseCode(codeList);
    for (let i = 0; i < codeList.length; i++) {
        if (codeList[i] === ' ') {
            decodedExpr += codeList[i];
        } else {
            decodedExpr += MORSE_TABLE[codeList[i]];
        }
    }
    return decodedExpr;
}

module.exports = {
    decode
}