//VARIABLES

//cannot use string methods in number, same fo all other data types
let name:string="Sudharsun";
//no special value as float or int, just number
let a:number =100;
//boolean
let isTrue:boolean = true;

//any -keyword that stops type checking for the particular variable, is not a good idea to use.

//array
let arr:number[]=[1,2,3];
let arr2:string[]=["a", "b", "c"];
let arr3:any[]=[1, "a", true];
//either or
let arr4:(number|string)[]=[1, 2, "a", "b"];

//FIXED VALUES
let pi:3.14=3.14;

//-------------------------------------------------------------------------------------------------------------------------------//

//FUNCTIONS
function add(a:number){
    return a+100;
}
add(10)

function sum(a:number, b:number){
    return a+b;
}
sum(10, 20)

function user(name:string, email:string, age:number, premiumUser:boolean){
    return `Name: ${name}, Email: ${email}, Age: ${age}, Premium User: ${premiumUser}`
}
user("Sudharsun", "sudharsun@gmail.com", 19, true)

//BETTER WAY TO WRITE FUNCTIONS
//the :number after paranthesis states the return type of func
function add1(a:number):number{
    return a+100;
}
add1(10)

//ARROW FUNCTIONS
const add2=(a:number):number=>{
    return a+100;
}
add2(10)

//-------------------------------------------------------------------------------------------------------------------------------//

//RETURN TYPE-OBJECTS
function createUser():{name:string, age:number}{
    return {
        name: 'Sudharsun',
        age: 19
    }
}
createUser()

//or 

function createUser2({name:string, age:number}) {}
let userCred={name: 'Sudharsun', age: 19};
createUser2(userCred)



export{}