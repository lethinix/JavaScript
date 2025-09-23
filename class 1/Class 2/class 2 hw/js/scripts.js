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


///class 2 hw 2

// number 1
let current_time = new Date();
let current_hr = current_time.getHours();

DT = current_time + current_hr;
console.log(DT);

if (3 < current_hr && current_hr < 11.99){
  console.log('good morning')
}else if(12 < current_hr && current_hr < 17){
  console.log('good afternoon')
} else if(17 < current_hr && current_hr< 21){
  console.log('good evening')
} else{
  console.log('good night')
}


// number 2
randomNumber = Math.random() * 6;
randomNumber = Number.parseInt(randomNumber) + 1;
console.log(randomNumber);

rollNum = 1

for (randomNumber ; randomNumber < 3; ) {
  console.log(randomNumber)
  randomNumber = Math.random() * 6;
  randomNumber = Number.parseInt(randomNumber) + 1;
  rollNum++ ; 
  
}
console.log(randomNumber);
console.log("your dice was rolled " + rollNum + " times!")

// //number 3

// number = 1

// for(number ; number < 5; number++){
//   console.log("#".repeat(number));
  
// }

// // number 4

// let size = 8; // 8x8 chessboard

// for (let row = 0; row < size; row++) {
//   let line = "";
//   for (let col = 0; col < size; col++) {
//     if ((row + col) % 2 === 0) {
//       line += "#";
//     } else {
//       line += " ";
//     }
//   }
//   console.log(line);
// }


