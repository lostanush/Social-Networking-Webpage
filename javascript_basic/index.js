// Day 1: Modern JavaScript (on browser)
console.log("Hello world ")

//Javascript in html 
function hello(a=" Default fname",b= "Default lname"){
    alert(`Hello there ${a} ${b} !`);
    
}
hello("Anush" , "Dighore");

//Windows object,DOM and localStorage   
let heading= document.querySelector("h1");
heading.innerText= "You are Gentelmen ! "

window.alert("Dattebayo YOu can do it ")
window.console.log("Dattebayo YOu can do it ")
window.localStorage.setItem("Key","Value")
console.log(localStorage)
console.log(localStorage.a)
window.localStorage.removeItem("appp")  

//Const and Object : datatypes -> var(global)/let(scope)/cosnt
const obj={
    name: 'I am Object Anush',
    age: ''
};
console.log(obj.name)

obj.age= prompt("Enter your age : ")
console.log(`Your age is : ${obj.age}`)

console.log(`Output object :`,obj)

//Arrow Function and return keyword
let createBlog =(title,body)=>{
    if(!title){
        throw new Error("Please enter the title! ");
    }
    if(!body){
        throw new Error("Please enter body ! ");
    }
    return (`${title} - ${body}`);
};

console.log(createBlog("The","World"));


//this keyword
let india={
    cities: ["nagpur","jaipur","raigarh","pune"],
    printwithdash: function(){
        console.log(this.cities.join(" - "));    
    }
};
india.printwithdash();

//Object destructuring : 
const uniStudents=(student)=>{
    let {fname , lname}= student;
    console.log(`${fname} ${lname} is a univeristy student. `);
};
uniStudents({
    fname: "Anush",
    lname: "Dighore"
});

//array destructuring :
const arr= ["one","two","three"];
console.log(arr)
const [first,second,third]= ["one","two","three"];
console.log(first,second,third)

//Spread operator: 
const indiancities=["nagpur","newDelhi"];
const uscities= ["newYork","WashingtonDC"]
const allcities= [...indiancities,...uscities];
console.log(allcities);

//rest operator: 
const fruits= ["orange","mango","banana"]
fruits.push("chiku")
const [forth, ...rest] = fruits
console.log("First => ",forth)
console.log("rest =>",rest)

let user= {
    name: "Anush Dighore",
    email: "anushd006@gmail.com",
    password: "anush@4005"
};
let {password,...rest2}= user;
console.log(rest2);

//Functions and prototype: (old way to create classes in javascript)
function person(name,age){
    this.name=name;
    this.age=age; 
}
person.prototype.info= function(){
    console.log(`${this.name} | ${this.age}`)
}
const p1= new person("Anush",21);
p1.info()
const p2= new person("Mayur",22);
p2.info();

/**
 * everything in java is object.
 * functions,arrays,constructors they all inherit the object type.
 * there are 6 primitive datatypes in javascript namely:
 * null, undefined, strings, numbers, booleans and symbols.
 * the rest of them inherit the object type.
 * thats why the prototype object is also created behind the scene when you create a function 
 * and we were able to use .prototype on it.
 */

//classes:
class vehicle{
    constructor(brand,model){
        this.brand=brand;
        this.model=model;
    }
    info(){
        console.log(`${this.brand} | ${this.model}`);
    }
};
const v1=new vehicle("bugatti","veron");
v1.info();
const v2=new vehicle("Lamborghini","Countach LPI 800-4");
v2.info();

//Extending classes:
class Twowheeler extends vehicle{
    constructor(brand,model,parts){
        super(brand,model)
        this.parts=parts;
    }
    info(){
        super.info();
        let [first,...rest] = this.parts;
        console.log(`Its parts includes ${rest} and ${first}.`)
    }
};

class Owner extends Twowheeler{
    constructor(brand,model,parts,owner){
        super(brand,model,parts)
        this.owner=owner;
    }
    info(){
        super.info();
        console.log(`The owner is : ${this.owner}`)
    }
};
const owner= new Owner(
    "HeroHonda",
    "Splender",
    ["tires","engine","chain","piston","condensor"],
    "Anush Dighore")
owner.info();