let arr = [1,2,3,4,5,6]
let strArr = ['A','a','B','b','C','c']
let RevArray = (arr) =>{
let revArr = [];
for (let i = arr.length-1; i>=0; i--){
    revArr.push(arr[i]);
}
console.log(`Orginal Array ==> ${arr.join('  ')}`);
console.log(`Reversed Array ==> ${revArr.join('  ')}`);
}

RevArray(strArr);

// OutPut
// Orginal Array ==> A  a  B  b  C  c
// Reversed Array ==> c  C  b  B  a  A
