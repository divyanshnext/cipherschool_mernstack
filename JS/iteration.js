// for(let i = 0;i<=10;i++){
//     console.log(i+1)
// }
// let index = 0;
// while(index <= 10){
//     console.log(`value of index is ${index}`);
//     index = index + 2;
// }

// let myArray = ['flash','batman','superman']

// for(let i=0;i<myArray.length;i++){
//     console.log(`value is ${myArray[i]}`);
// }

// let index = 0;
// while(index<myArray.length){
//     console.log(myArray[index]);
//     index++;
// }



//for of loop-----------------------------------


// const arr = [1,2,3,4,5]

// for(const num of arr){
//     console.log(num);
// }

// const greetings = "hello world"
// for(const greet of greetings){
//     console.log(`Each char is ${greet}`)
// }

// const mapx = new Map() // contain unique characters
// mapx.set('IN',"India")
// mapx.set('USA',"United States of America")
// mapx.set('Fr',"France")
// mapx.set('IN',"India")

// // console.log(mapx)

// for (const [key,value] of mapx){
//     console.log(key,':-',value);
// }

// const obx = {              
//     'name' : 'divyansh',
//     'class' : 'B.tech',
//     'stream' : 'Cse'
// }

// for(const [key,value] of obx){
//     console.log(key, ':-', value);
// }



//for in loop ---------------------------------------




// const myObj = {
//     js: 'javascript',
//     cpp: 'c++',
//     rb: 'ruby',
//     swift: 'swift by apple'
// }

// for(const key in myObj){
//     console.log(`${key} matlab--- ${myObj[key]}`)
// }



//for each loop ---------------------------------------
// const coding = ["js","java","cpp","python","c"]

// coding.forEach(function (item) {
//     console.log(item)
// })
// //both are same
// coding.forEach((item) => {
//     console.log(item)
// })

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr);
// })

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     }
// ]

// myCoding.forEach( (item)=>{
//     console.log(item)
// })




const myNums = [1,2,3,4,5,6]

myNums.filter( (num) => num>4)
console.log(newNums);