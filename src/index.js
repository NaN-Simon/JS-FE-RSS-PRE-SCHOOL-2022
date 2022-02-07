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

/* function decode(expr) {
    let result = ""
    for (let i = 0;i<expr.length;i++){
       for (let key in MORSE_TABLE) {
        console.log()
        if (expr[i] === MORSE_TABLE[key]){result += translate(key)}
    }}
    return result
}
function translate(key){
    let result = ""
    for (let letter of key){
        if (letter == '.'){result += 10}
        if (letter == '-'){result += 11}
    }
    return result.padStart(10,'0')
} */
//type2
function decode(expr) {
    let result = ""
    expr = Array.from(expr)
    arr = toDivide(expr,10)
    //con(arr)
    arr.forEach(element => {
        //con(element)
        let arr2 = toDivide(element,2)
        let arr3 = []
        //con(arr2)
        for (let duo of arr2){
            //con(duo)
            let solo = duo.join("")
            if(solo != '00'){
                if(solo == '**'){arr3.push(' ')}else{arr3.push(solo)}
                
            }
        }
        //con(arr3)
        //con(translate(arr3))
        result += convert(translate(arr3))
        
    });
    return result
}
function toDivide(arrTen,s){
    let arr = []
    let size = s;
    for (let i=0;i<Math.ceil(arrTen.length/size);i++){
        arr[i]= arrTen.slice((i*size),(i*size)+size);
    }
    return arr
}
function translate(key){
    let result = ""
    key.forEach(el =>{
        if (el == 10){result += '.'}
        if (el == 11){result += '-'}    
    })

    return result
}
function convert(symb){
    for (let key in MORSE_TABLE) {
        if(symb == ""){return " "}
        if(symb == key){
            return MORSE_TABLE[key] }
    }

}











/* const expr = '000000001100101010100000000010**********00111110110000101011000000101000111011100000111011**********00111010100000101110000011111100001011110000001110**********001010111000001111110011101011**********00101111110000101011000000111100101111100000101010**********0000111111001010101100000000100000101110**********000000001100101010100000000010**********0010111010000000101100111110100011101111**********000011101000001111110000111110'
 */
/* con(decode(expr))

function con(c){
    console.log(c)
} */
module.exports = {
    decode
}


