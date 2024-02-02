const human = {
    hobby: 'chess',
    fullName: function () {
        return `${this.fistName} ${this.lastName}`
    }
}

const john = {
    fistName: 'John',
    lastName: 'Smith'
}
console.log(john);
console.log(john.hobby);
john.__proto__= human;
console.log(john);
console.log(john.hobby);
john.hobby = 'cannabis';
console.log(john.hobby);
console.log(john.__proto__);
console.log(john.fullName());
console.log("====constructor====");
// Person.prototype = human;
Person.prototype.fullName = human.fullName;
Person.prototype.hobby = 'JS'
console.log(Person.prototype.constructor);
// console.log(Person.prototype.constructor === Person);
const peter = new Person('Peter', 'Jackson');
const mary = new Person('Mary', 'Smith');
console.log(peter);
console.log(mary);
// peter.__proto__ = human;
// mary.__proto__ = human;
console.log(peter.fullName());
console.log(mary.fullName()); 
console.log("====Arrays====")
Array.prototype.printArray = function () {
    for (let i = 0; i < this.length; i++) {
        console.log(this[i]);
    }
    console.log('=====================');
}
const numbers = new Array(2, 3, 5, 7, 11, 13);
console.log(numbers);
numbers.printArray();
const arr = ['one', 'two', 'three'];
arr.printArray();
console.log("===== for-in Arrays =====");
for(let i in arr) {
    console.log(arr[i]);
}
function Person(fistName, lastName) {
    this.fistName = fistName;
    this.lastName = lastName;
}
