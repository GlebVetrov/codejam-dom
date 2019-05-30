const FindLongestString = (sen) => {
    let arrSen = sen.split(" ");
    let longestWord = '';
    arrSen.forEach((element)=>{
        if(longestWord.length < element.length){
            longestWord = element;
            return;
        }
        return;
    });
    return longestWord;
}

let firstPhrase = "my favorite juice is grapefruit";
let secondPhrase = "They often help us";

console.log(
FindLongestString(firstPhrase));
console.log(
FindLongestString(secondPhrase));