


# // // Homework

# // // const rollDice = function(dice_sides, roll_num) {
# // //   random_number = Math.random() * dice_sides;
# // //   random_number = Number.parseInt(random_number) + 1;
# // //   console.log("your first role was " + random_number);

# // //    roll_num = 1

# // //   for (random_number ; random_number < 3; ) {
# // //     console.log("your next roll was: " + random_number)
# // //     random_number = Math.random() * dice_sides;
# // //     random_number = Number.parseInt(random_number) + 1;
# // //     roll_num++ ; 
    
# // //   }

# // //   msg = "your dice was rolled " + roll_num + " times, with your final roll landing on " + random_number
# // //   // return msg, random_number
# // //   console.log(msg);

# // // }

# // // rollDice(5,1);
# // // // console.log(msg)


# // ////class 4 notes------------------

# // const t = {
# //   firs: "john",
# //   last: "smith"
# // }

# // const a = [
# //   1,
# //   2,
# //   "below"
# // ]

# // const new_string = "hello"
# // const new_string2 = new String("hello") ///these both do the same thing
# // //new_string. then lets you use different methods on the string

# // //math objects are built in math functions... exampels
# // // Math.PI, Math. abs, Math.sign
# // //let num_sign = Math.sign(-23)
# // const the_date = new Date();
# // console.log(the_date.getTime()) //this gives you the number of seconds that have passed so far in the day
# // console.log(the_date.getDay()) //this starts at 0 on sunday

# // //making a function to get the days of the week---review to understand how this is working----------
# // const days = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat']
# // let curr_day = the_date.getDay();
# // console.log(days[curr_day]);

# // console.log (the_date.toLocaleDateString(
# //   'en-US',
# //   {
# //     weekday: 'long'
# //   })
# // );





# // //custom object---------------
# // // const person = { first: 'john'}
# // //or ----------------------- ( this one works well)
# // // const person = {};
# // // person.firstName = 'john';
# // // person.lastName = 'smith';
# // // person['middle Name'] = 'K'; //this is other syntax for the same thing - would only want 
# // // // to do this if your property name follows a non-standard format - like if it has a space in it
# // // console.log(person.lastName); //call like this
# // // console.log(person['middle Name']); //call like this

# // // person.sayHello = function() {
# // //   console.log("my mame is " + person.firstName + " " + this.lastName);
# // // }
# // //in console run person.sayHello()
 

# // ///put in fucntion --- need to fix this-----------------
# // // const person = {
# // //     firstName = 'john';
# // //     lastName = 'smith';
# // //     ['middle Name'] = 'K'; //this is other syntax for the same thing - would only want 
# // //     // to do this if your property name follows a non-standard format - like if it has a space in it
# // //     console.log(person.lastName); //call like this
# // //     console.log(person['middle Name']); //call like this
    
# // //     sayHello() {
# // //       console.log("my mame is " + person.firstName + " " + this.lastName);
# // //     }
# // // }



# // // //custon objects - another example ---------------------------
# // // let return_amount = 1000;
# // // const person = {
# // //   firsName: 'john',
# // //   lastName:'parsons',
# // //   wealth: (return_amount > 10**6) ? true : false
# // // };

# // // arr[4] = 45
# // // person.firstName = 'jull'

# // // for (let val in person) {
# // //   console.log( val, person[val] );
# // // }

# // // for(const item of Object.entries( person ) ) {
# // //   console.log( item );
# // // }

# // // for(const [key, val] of Object.entries( person ) ) {
# // //   console.log( key,val );
# // // } ///this does the same thing but slightly more advanced


# // // //another way to do it:
# // // const obj = { first: 'jane', last: 'doe'};

# // // let fi = obj.first
# // // let la = obj.last
# // // const {first: f, last: l} = obj;
# // // const {first, last} = obj;



# // // const family = {
# // //   dad: {realName: "john denver" },
# // //   mom: {realName: "Katie McGraw"},
# // //   son: { realName: 'lawrence holly'}
# // // }

# // // const dad_obj = family.dad;
# // // console.log(dad_obj.realName)

# // // const arr = [1,3,4, ['a','b']]

# // // let item = arr[3][0]; ///asks for the 0 index in the 3rd index of the array -- these are nested arrays 
# // // console.log(item)





# // // //another custom object example
# // // const person = {
# // //   name: 'thor',
# // //   weapon: 'axe'
# // // };

# // // // const clonePerson = person;
# // // // clonePerson.name = Sif;
# // // //way around this

# // // const clonePerson = {};
# // // Object.assign(clonePerson, person); ///need to understand what .assign is
# // // console.log(clonePerson)



# // // //putting functions into objects to only pass certain, non-default, parameters
# // // function convertToCelcius ({ deg_fah = 2123, dec_fixed = 2}) {
# // //   let converted_deg = (deg_fah-32) * 5/9;
# // //   converted_deg - converted_deg.toFixed(dec_fixed);
# // //   return(converted_deg);
# // // }

# // // console.log(convertToCelcius( {dec_fixed: 2})) ///why isnt this working to limit decimal place?


# // // //something about JSON
# // // let injested_data = '{"name":"thor","weapon":"axe"}'
# // // console.log(JSON.parse( injested_data ))

# // ///a JSON is a popular way of exchanging data that can be used in many different languages


# // function createPerson(firstName, lastName) {
# //   const obj = {
# //     firstName: firstName,
# //     lastName: lastName,
# //     getFullName: function() {
# //       return this.firstName + " " + this.lastName
# //     },
# //     greet: function(person) {
# //       console.log("Hello, I'm " + this.getFullName());
# //     }
# //   };
# //   return obj;
# // }

# // const person1 = createPerson("john","smith")
# // console.log(person1)


# // ///create a dice object
# // // //my try
# // // function rollDice(dice_sides = 6){
# // // const dice = {
# // //   dice_sides: dice_sides,
# // //   random_number: Math.random() * dice_sides,
  
# // // roll: function() {
# // //   random_number = Number.parseInt(random_number) + 1;
# // //   console.log("your first role was " + random_number);
# // //   return random_number;
# // // }
# // // }

# // // }
# // // console.log(rollDice(12))

# // // //solution
# // // function rolled_dice(sides = 6) {
# // //   let rolled_val = Math.floor(sides * Math.random()) + 1;
# // //   return rolled_val;
# // // }
# // // rolled_dice(6);


# // //exercise 2
# // function shape(sides = 3, length){
# //   this.sides = sides
# //   this.length = length
# //   area = (this.sides * (this.length**2)) / (4*Math.tan(Math.PI/sides))
# //   return this.area,
# //   msg = "your shape's area is " + this.area
  
# // }

# // console.log(shape(4,2));
# // console.log(shape(9,3));

# // const square = new shape(4,2);
# // console.log(square)





# // //    roll_num = 1

# // //   for (random_number ; random_number < 3; ) {
# // //     console.log("your next roll was: " + random_number)
# // //     random_number = Math.random() * dice_sides;
# // //     random_number = Number.parseInt(random_number) + 1;
# // //     roll_num++ ; 
    
# // //   }

 // //   msg = "your dice was rolled " + roll_num + " times, with your final roll landing on " + random_number
# // //   // return msg, random_number
# // //   console.log(msg);

# // // 