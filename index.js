let http = require('http');
let finalhandler = require('finalhandler');
let router = require('router');
const { ifError } = require('assert');

let server = http.createServer(function(request, response){
    router(request, response, finalhandler(request, response))
})

// server.listen(3000, function(){
//     console.log('Server already running on port 3000!!!!')
// })

function pigLatin(words) {
  const vocalWord = ['a', 'i', 'u', 'e', ' o'];
  // code here
  let newStr = "";

    if (vocalWord.indexOf(words[0]) > -1) {
        return words;
    } else {
        const arr = words.split(' ');
    return arr.map((word) => {
        return word.match(/[aiueo]/i) ?
            `${word.substr(1)}${word.substr(0,1)}ay` : word
    }).join(' ');
}
}

function sortCharacters(text) {
    return text.split('').sort().join('');
}

// console.log(pigLatin('food')) // ---> oodfay
// console.log(pigLatin('snap')) // ---> apsnay
// console.log(pigLatin('guide')) // ---> uidegay
// console.log(pigLatin('beli makanan')) // ---> elibay akananmay
// console.log(pigLatin('apel')) // ---> apel

console.log(sortCharacters('hello')); // 'ehllo'
console.log(sortCharacters('truncate')); // 'acenrttu'
console.log(sortCharacters('developer')); // 'deeeloprv'
