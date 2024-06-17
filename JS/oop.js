// let person = {
//     firstName : "Divyansh",
//     secondName : "Chaturvedi",

//     getFullName: function(){
//         return 'the name of the person is ${person.firstName} ${person.secondName}';
//     },

//     phoneNumber: {
//         mobile: "12345",
//         telephone: "3534645"
//     },
// };

// console.log(person.getFullName());
// console.log(person.phoneNumber.landline);





// function person(firstName,lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// let person1 = new person("Shantanu","Shubham");
// let person2 = new person("divyansh","chaturvedi");

// console.log(person1.firstName);
// console.log('${person2.firstName} ${person2.lastName}');





//uses of objects
// const coder = {
//     isStudying: false,
//     printIntroduction: function(){
//         console.log("My name is ${this.name}. Am I Studying?: ${this.isStudying}");
//     },
// };

// const me = Object.create(coder);
// me.name = "Shantanu Shubham";

// me.isStudying = true;
// me.printIntroduction();





//Classes: Classes are blueprints of an Object.
// class Vehicle {
//     constructor(name,maker,engine){
//         this.name = name;
//         this.maker = maker;
//         this.engine = engine;
//     }

//     getDetails(){
//         return 'the name of the vehicle is ${this.name}';
//     }
// }

// let v1 = new Vehicle("Creta","Hyundai","2500cc");
// let v2 = new Vehicle("Q5","Audo","3000cc");

// console.log(v1.name);
// console.log(v2.maker);
// console.log(v1.getDetails());





//abstraction
// class Person {
//     constructor(name,id){
//         this.name = name;
//         this.id = id;
//     }

//     addAdress(newAdress) {
//         this.adress = newAdress;
//     }

//     getDetails() {
//         console.log('Name is: ${this.name}, and address is: ${this.address}');
//     }
// }
// let person1 = new Person("Shantanu",24);
// person1.addAdress("Kolkata");
// person1.getDetails();









// class Person {
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
    

//     let getDetails_noAccess = function(){
//             return 'first name is : ${this.firstName} and last name is: ${this.lastName}';
//     }
//     }
// }  

// let person1 = new Person("Shantanu","shubahm");
// console.log(person1.firstName);
// console.log(person1.getDetails_noAccess());
// console.log(person1.getDetails_noAccess());