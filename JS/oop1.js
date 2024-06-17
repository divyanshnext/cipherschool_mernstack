
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    

    let getDetails_noAccess = function(){
            return 'first name is : ${this.firstName} and last name is: ${this.lastName}';
    }
    }
}  

let person1 = new Person("Shantanu","shubahm");
console.log(person1.firstName);
console.log(person1.getDetails_noAccess());
console.log(person1.getDetails_noAccess());