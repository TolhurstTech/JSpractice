function buildHelloArray(num){
    let myArray = [];
    for (let i =0; i < num; i++ ) {
        myArray.push('hello');
    }
    return myArray;
}

let result = buildHelloArray(11);
console.log(result);