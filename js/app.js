let name = 'Mimi';

let fullname = name + 'Ogechi';

//let fullname = name - 'Ogechi';

//const studentInfo = {
    //name: 'Mimi',
    //isLogged: true,
    //isOla: false,
    //age: 20,
    //"Year of graduation": 2000,
//};
//console.log(studentInfo);
//console.log(studentInfo.name);
//console.log(studentInfo["Year of graduation"]);


const studentInfo = {
   firstname: 'Mimi',
   lastname: 'Davina',
   fullname: function() {
      console.log(this.firstname + '' + '' + this.lastname);
   },
   isLogged: true,
   isOla: false,
   age: 20,
   "Year of graduation": 2000,
};
console.log(studentInfo.fullname());


const array = ['kelvin', 'Oge', true, false, 20];

//console.log(array);

//console.log(array[0]);
//console.log(array[1]);
//console.log(array[2]);
//console.log(array[3]);
//console.log(array[4]);

for(i = 0; i <= array.length; i++) {
   // console.log( 'greater heights' , array[i]);
   console.log(i, ':', array[i]);
}


let x = 6;
let y = 8;
let sum = x % y;
console.log(sum);

//x -= y;
//x = x - y;
console.log(x <= y && 'Hello');
console.log( x > 10 || y > 6);


function vetPolitician () {
    let politicalAge = prompt('Enter your age:');
 if( politicalAge ==18) {
    alert('You are eligible');
 } 
 else if ( politicalAge >= 18) {
    alert('You are late');
 }
 else {
    alert('You are a minor');
 } 
}
//vetPolitician ();   to run everything in that function

function welcomeNewMembers(...args) {
   console.log('Welcome' , args);
}

setTimeout(() => {
   console.log('HELLO');
}, 3000);
welcomeNewMembers([1, 2, 3, 4, 1, 2, 3]);


//Hoistesting//
handleSubmit();
function handleSubmit() {
   console.log('WAR');
}

const handleSubmit2 = ()=> {
   console.log('PEACE');
}
handleSubmit2();


//(function (){
   //console.log('Annon 1') ;
//})()

//( ()=> {
   //console.log('Annon 2') ;
// })()

// const MenuIcon = document.querySelector('.menu-icon span');
// menuIcon.style.backgroundColor ='red';
// console.dir(MenuIcon);

const heroText = document.querySelector('.hero-left h1');
// console.log((heroText.textContent = 'The Queen of England'));


const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.nav-link');
// menuIcon.onclick = function () {
   // console.log('clicked');
   // menu.style.display = 'block';
// };
console.log(menuIcon);

      //   OR     //(Professional one)
menuIcon.addEventListener('click' , handleOpen);
function handleOpen() {
   // menu.style.display = 'block';
   //console.log(menu.className.includes('toggle'));  --shows when a class is added and when it is removed. 
   menu.classList.toggle('toggle');
}

fetch()