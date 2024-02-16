
const lengthnew = 5;
const valuenew = '*'; // or any other initial value you prefer
const newArray = Array(lengthnew).fill(valuenew);

const array=[];
const createPyramid=newArray.map((element,index,arr)=>console.log("\n"+element.repeat(index+1)));


const length=10;
const value=" ";
const newArr= Array(length).fill(value);
const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const output =newArr.map((element,index)=>console.log(alphabets.slice(0,index)+"\n"));
