let userString = undefined
let userID = NaN
let tmp = undefined
let userIndex = NaN

function getUserString () {
    let customString = undefined
    do {
        customString = prompt('How much is the fish?')
    }
    while ((!customString || customString === ' ') || (/\d/.test(customString)))
    return customString
}
function getUserID () {
    let customID = NaN
    do {
        customID = +prompt('Enter the action ID: \n1 - Find out the Unicode character (by index); \n2 - The symbol was deleted (by index); \n3 - Change the symbol to a random emoticon (by index); \n4 - Find out the number of letters in a line (without spaces)')
    }
    while(!(customID <= 4 && customID >= 1))
    return customID
}
function getUserIndex () {
    do {
        tmp = +prompt('Input index')
    }
    while(!(tmp >= 0 && tmp <= userString.length))
    return tmp
}
function getSymbolUnicode (index) {
    return userString.split('')[index].charCodeAt()
}
function delSymbol (index) {
    tmp = userString.split('')
    tmp.splice(index, 1)
    return tmp.join('')
}
function removeSymbol (index) {
    tmp = userString.split('')
    tmp[index] = randomSmile()
    return tmp.join('')
}
function stringLengtWithoutSpaces () {
    return userString.split('').filter(char => char !== ' ').length;
}

function randomSmile () {
    const Emoji = ['😊', '😂', '🤣', '❤', '😍', '😒', '😁', '👍', '😎', '👀', '🎁']
    return Emoji[getRandomIntInclusive(1, 10)]
}
function getRandomIntInclusive(min, max) {

    min = Math.ceil(min);
  
    max = Math.floor(max);
  
    return Math.floor(Math.random() * (max - min + 1) + min);
  
}

userString = getUserString()
userID = getUserID()
switch (userID) {
    case 1: 
        console.log(`Unicode: ${getSymbolUnicode(getUserIndex())}`)
        break
    case 2: 
        console.log(`Your string: ${delSymbol(getUserIndex())}`)
        break
    case 3:
        console.log(`Your string: ${removeSymbol(getUserIndex())}`)
        break
    case 4:
        console.log(`String lenght without spaces: ${stringLengtWithoutSpaces()}`)
        break
}