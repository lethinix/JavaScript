

// let number

// function triangle (number){
//   number = 1

// for(number ; number < 5; number++){
//   console.log("#".repeat(number));
// }

// }

// triangle()
// triangle()


// // convert to celcius funtion - shows parameters

// function convertC (degF){
//   let converted_deg = (degF - 32)*(5/9);
//   return(converted_deg);
  
// }

// console.log(convertC(100))

// //pure version
// function convertC (degF, dec){
//   let converted_deg = (degF - 32)*(5/9);
//   converted_deg = converted_deg.toFixed(dec)
//   return(converted_deg); //having return here is what 
//   //helps this become a pure function - this way when you 
//   // console.log it there is actually something to return
  
// }

// let val1 = convertC(100,2);
// let val2 = convertC(32)
// console.log('the celcius equiv of 100 is ' + val1)




// function makeSum(...args){
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// }

// let args=[1,2,2,2,2]
// makeSum(args)
// console.log(makeSum(args));





//you can assign a function to variable - this also shows passing
//a function in a function

// const convertC = function(degF, dec, out_type){
//   let converted_deg = (degF - 32)*(5/9);
//   converted_deg = converted_deg.toFixed(dec);
//   //return(converted_deg); //having return here is what 
//   //helps this become a pure function - this way when you 
//   // console.log it there is actually something to return
//   out_type(converted_deg);
// }

// console.log(convertC(100, 1));

// //to pass this function as a parameter
// // function convert(converter, temperature){
// //   console.log(converter(temperature))
// // }

// const displayInConsole = function(value) {
//   console.log('blah : '+ value);
// }

// const displayinModal = function(value){
//   alert('blah' + value);
// }

// convertC(23, displayInModal);





// const convertC = function(degF){
//   let converted_deg = (degF - 32)*(5/9);
//   return converted_deg;
// } //this can turn into the line below: 

// const convertC = (deg_fah, callback) => (deg_fah-32) * 5/9

// console.log(convertC(23))
// ////////what is callback????????




//this is for array iterators - revisit this to understand
//as well
// const my_array = ["blue", "red", "green"];

// // const new_array = [];

//  for(const val of my_array ){
//   new_array.push(val.toUpperCase());
//  }
//  console.log(new_array);

//  const inter = function(val){
//   return(val).toUpperCase();
//  }

//  const new_array = my_array.map( inter);
//  console.log(new_array)





// let my_quote = " The answer to the great question of life, the universe and everything is forty two"
// let words_array = my_quote.split(" ");
// let array_total = 0;
// for (const a of words_array ){
//   array_total += a.length;
//   console.log(a,array_total)
// }

// let average = array_total/words_array.length;
// console.log(average);

// //or could do this
// let total = words_array.reduce(function(prev, curr){
//   return prev + curr.length;
// }, 0) / words_array.length;
// console.log(average);





// //closure
// function multiplier(factor){
//   let ret = function(number) {
//     return number * factor;
//   };
//   return ret;
// }
// let twice = multiplier(2);
// console.log(twice(3));
// let thrice = multiplier(3)
// console.log(thrice(3));



// //create person function
// function createPerson(first_name, last_name){
//   return {
//     first_name: first_name,
//     last_name: last_name, 
//     getFullName: function() {
//       return this.first_name + " " + this.last_name
//     },
//     greet: function() {
//       console.log("hello, I'm " + this.getFullName());
//     }
//   };
// }

// var per1 = createPerson("john ", "alex")
// per1.greet();
// console.log(per1.getFullName());


//------------------------------------------------------------------------------
//homework 3 
//1. funciton that calculates the average of a list of numbers. use an array iterator if 
// you can

// const array1 = [1,1,2,2,3,3]
// let average = numTotal / array1.length

// var numTotal = array1.reduce(function(prev, curr){
//   return prev + curr.length; 
// }, 0) / array1.length;

// console.log(average);

 ////actual solution
// const numbers = [1,2,3,4]
// let total = 0;
// for (const val of numbers){
//   total = total + val;
// }
// let avg = total / numbers.length;
// console.log(avg)

// //---or---STUDY THIS
// function calc_avg (arr){
// let total = 0;
// for (const val of arr){
//   total = total + val;
//   }
//     let avg = total / arr.length;
//     return avg;
// }

// let numbers = [1,2,3,4,4]
// console.log( calc_avg(numbers));





// //or could do this
// let total = words_array.reduce(function(prev, curr){
//   return prev + curr.length;
// }, 0) / words_array.length;
// console.log(average);


// Homework

const rollDice = function(dice_sides, roll_num) {
  random_number = Math.random() * dice_sides;
  random_number = Number.parseInt(random_number) + 1;
  console.log("your first role was " + random_number);

   roll_num = 1

  for (random_number ; random_number < 3; ) {
    console.log("your next roll was: " + random_number)
    random_number = Math.random() * dice_sides;
    random_number = Number.parseInt(random_number) + 1;
    roll_num++ ; 
    
  }

  msg = "your dice was rolled " + roll_num + " times, with your final roll landing on " + random_number
  // return msg, random_number
  console.log(msg);

}

rollDice(5,1);
// console.log(msg)