const ChangeLetters = (str) => {
    let arrEn = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let arrVowelEn =['a', 'e', 'i', 'o', 'u', 'y'];
    arrStr = str.split('');
    arrStr = arrStr.map((elem) => {     
        if(arrEn.indexOf(elem) !== -1) {
            let num = arrEn.indexOf(elem);
                if(arrVowelEn.indexOf(arrEn[num + 1]) !== -1) {
                    return arrEn[num + 1].toUpperCase();
                }
            return arrEn[num + 1];
        }
        return elem;
    });
    return arrStr.join('');
}

console.log(ChangeLetters('dog'));
console.log(ChangeLetters('drink cola!'));