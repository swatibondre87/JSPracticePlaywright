let person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 28,
  isStudent: false
};
person.firstName = "joe"
console.log(person)
console.log(person.firstName); 
console.log(person["lastName"])
person.age = 29
console.log(person.age)
person.phone= 2345
console.log(person.phone)
console.log(person)
delete person.phone
console.log(person)