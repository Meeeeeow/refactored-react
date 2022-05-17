// import { compose , pipe } from 'lodash/fp'
// import {Map} from 'immutable';
//import { produce } from 'immer';

 // functions as arguments and passing
function sayHello(){
    return "Hello World!";
}

let fn = sayHello;
console.log(fn());

function greet(anotherFunc){
    return anotherFunc();
}
console.log(greet(fn));

function helloFromAnno(){
    return function(){
        return "Call from annonymous";
    }
}
console.log(helloFromAnno()());

//function composition
let input = "   Hello  ";
const trimmed = str => str.trim();
const wrapInDiv =  str => `<div> ${str} </div>`;
const wrapInSpan = str => `<span>${str}</span>`;
//both are same so use currying to reduce redundancy
// const wrap = (type,str) => `<${type}> str <${type}>` // but pipe always exprects function so error
const wrap = type=> str=> `<${type}> str <${type}>`; //returns a function all time
const toUpper =  str =>  str.toUpperCase();

console.log(wrapInDiv(toUpper(trimmed(input)))); // already too many brackets
//to solve this composing and piping

// const transform = compose(wrap("div"),toUpper,trimmed); //returns a function
// console.log(transform(input));

// const transforms = pipe(trimmed,toUpper,wrap("div"));
// console.log(transforms);

//currying
const add1 = a => b => a + b;
console.log(add1(1)(5)); // add1(a) (b) => 6

// update object with immutable option

const person = {name:"Rahim"};
const updated = Object.assign({},person,{
    name:"karim",
    age:40,
    fullname:function(){
        return `${this.name} is ${this.age} years old.`
    }
})
console.log(updated.name); // both assign and spread op did shallow copy
//we need deep copy so that any change in copy cannot modify the main
const updated_spread = {...person,name:"Karim"};
console.log(updated_spread)

const person1={
    name:'r',
    age:40,
    address:{
        city:'dhaka',
        country:'ban'
    }
}
const updated1 ={...person1};
console.log(updated1)
updated1.address.city='rajshahi'; // will change the main obj city to rajshahi
console.log(person1)

//deep copy
const updated2 = { ...person1,
address:{
    ...person1.address,
    city:'khulna'
}
}
console.log(person1);
console.log(updated2);

//updating arrays
const numbers = [1,2,3];
//adding
const updatedArray = [...numbers,4,5];
const addFirst = [6,7,...updatedArray];
console.log(updatedArray);
console.log(addFirst);
//adding in a direct pos
index  = addFirst.indexOf(1);
const addInPos = [...addFirst.slice(0,index),
                    8,9,
                    ...addFirst.slice(index)]
console.log(addInPos);

//remove
const removed = addInPos.filter(num => num !== 1);
console.log(removed);

//update
const updates = addInPos.map(num => num === 8 ? num * 10 : num);
console.log(updates);

const arrayOfObjs=[
    {
        name:'x',
        age:20
    },
    {
        name:'y',
        age:43
    },
    12
]
//adding 
const againArray = [...arrayOfObjs,14];
console.log(againArray);
const addObjs = [...againArray,{name:'z',age:30}];
console.log(addObjs);

//updating
const updateAgain = addObjs.map(item => Number(item) ?  item : {...item,age:item.age+5});
console.log(updateAgain);

//immutable.js

// let book = Map({title:"harry Potter"});
// console.log(book.get("title")); // mot book.title
// console.log(book.toJS()) // plain js
// books = book.set("isPublish",true); // set a new property