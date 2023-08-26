 //this is my first java script code
 console.log ('Hello World');
 //variables
 let myname= 'stella';
  console.log(myname);

//multiple variables
let firstName = 'stella';
let lastName = 'Ochuba';

 //constants 
 let intrestRate = 0.3;
 intrestRate = 1;
 console.log(intrestRate);

 //primitive types
 let myName = 'stella'; //string literal
 let age = 30; //number literal
 let isApproved = true; //boolean literal
 let middleName ;  //undefined
 let maidenName = null;  //null

 //objects
  let person ={myName:'stella', age: 30};
  console.log(person);
//dot notations
person.name = 'john';
console.log(persom.name);
//bracket notations
person['name']='mercy';

//arrays
let selectedColours = ['red,blue'];
selectedColours[2,3] = 'black', '20';
console.log(selectedColours[0]);

//functions(parameter)
function greet (myName, lastName){
  console.log('hello' + myName+ ''+ lastName);}
  //argument
greet('stella','isabella');
greet('racheal','smith');

//calculating a value
function square(number){number*number;}
console.log(square(2));