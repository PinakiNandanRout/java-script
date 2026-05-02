// two types - primitive 2. non primitive
//call by value  / call by reference how data store how access

// primitive 

// 7 types : string,Number,Boolean,null,undefined,symbol,BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail ;
const id = symbol('123')
const anotherid = symbol ('123')


console.log(id === anotherId);

const bigNumber = 23242423453455251n // n for bigint big number



//Reference (Non primitive)

// Array, objects ,function

const heros = ["shaktiman","naagraj","doga"];
 let myObj = {
     name: "pinaki",
     age :"22"
}
const myfunction = function(){
 console.log("hello world");

}

console.log(typeof myFunction);