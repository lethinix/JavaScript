console.log('Hello');

let greeting_container;
// assign greeting to variable
greeting_container = 'Hellozzz';
console.log(greeting_container);

// alert("Greetings " + greeting_container);

document.write("<p>" + greeting_container + "</p>");

// /* event listener to change body background */
// const btn = document.getElementById('button');

// const rainbow = ['red','orange','yellow','green','blue','rebeccapurple','violet'];
// function change() {
//    	const num = Math.floor( 7*Math.random() );
// 	document.body.style.background = rainbow[Math.floor(7*Math.random())];
// }
// btn.addEventListener('click', change);

// setInterval( change, 500 );


/* Simple DOM Manipulation example */
const now = new Date();
const hours = now.getHours();

document.write(`It's now: ${hours}. <br><br>`);
let bgColor = "black";

if (hours > 17 && hours < 20){
  bgColor = "orange";
}
else if (hours > 19 && hours < 22){
  bgColor = "orangered";
}
else if (hours > 21 || hours < 5){
  bgColor = "#C0C0C0";
}
else if (hours > 8 && hours < 18){
  bgColor = "lightblue";
}
else if (hours > 6 && hours < 9){
  bgColor = "skyblue";
}
else if (hours > 4 && hours < 7){
  bgColor = "steelblue";
}
else {
  bgColor = "white";
}

document.body.style.backgroundColor = bgColor;


//class 2 exercise 1
// let randomNumber = 8

// randomNumber = Math.random() * 10;
// randomNumber = Number.parseInt(randomNumber)
// console.log(randomNumber)

// if (randomNumber%2 ==1){
//   console.log("this number is odd")
// } else{
//   console.log("this number is even")
// }


///class 2 exercise 2

randomNumber = Math.random() * 6;
randomNumber = Number.parseInt(randomNumber) + 1;
console.log(randomNumber);

for (randomNumber ; randomNumber < 3; ) {
  console.log("randomNumber")
  randomNumber = Math.random() * 6;
  
}






switch (randomNumber) {
  case(0):
    console.log("you do not have an angle number")
    break;
  case(1):
    console.log("your angel number is 1")
    break;
  case(2):
    console.log("your angel number is 22")
    break;
  case(3):
    console.log("your angel number is 333")
    break;
  case(4):
    console.log("your angel number is 4444")
    break;
  case(5):
    console.log("your angel number is 55555")
  break;case(6):
    console.log("your angel number is 66666")
    break;
 
}