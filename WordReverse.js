const WordReverse = (str) => {
    let arrRevStr = str.split("")
                        .reverse()
                        .join("");
    
    return arrRevStr;
}

let firstStr = "shopping"
let secondStr = "I am busy"

console.log(WordReverse("i love you"));
console.log(WordReverse(firstStr));
console.log(WordReverse(secondStr));