function decoder(str){
    let arr = str.split('');
    let num = Number(arr[0]);
    let newArr = [];
    for(let i = 1; i < arr.length; i++){
        charCode = arr[i].charCodeAt(0);
        newCode = charCode + num;
        newArr.push(String.fromCharCode(newCode));
    }
    return newArr.join('');
}

console.log(decoder("2fcjjm"));