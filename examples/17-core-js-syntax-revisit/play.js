let fullname = "Max";
let age = 29;
let hasHobbies = true;

age = 30;

function summarizeUser(userName, userAge, userHasHobby) {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobby
  );
}

const summarizeUserArrow = (userName, userAge, userHasHobby) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobby
  );
};

const add = (a, b) => a + b;

const addOne = (a) => a + 1;

const addRandom = () => 1 + 2;

console.log(addRandom());
console.log(addOne(1));

console.log(add(1, 2));

console.log(summarizeUserArrow(fullname, age, hasHobbies));

const person = {
  name: "Max",
  age: 29,
  // need to have function or substitute the anonymous with the model () {} in order to get the objects attributes
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

const copiedPerson = { ...person };
console.log(copiedPerson);

person.greet();

const hobbies = ["Sports", "Cooking"];

hobbies.push("Programming");
console.log(hobbies);
// The only thing constant is the pointer to address not the values of the variable. soft pointer c++

for (let hobby of hobbies) {
  console.log(hobby);
}

console.log(
  hobbies.map((hobby) => {
    return "Hobby: " + hobby;
  })
);

console.log(hobbies);

const coppiedArray = hobbies.slice();
console.log(coppiedArray);

// new array with the first element hobbye (nested array)
const coppiedArray2 = [hobbies];
console.log(coppiedArray2);

// spread array no nested array || spread operator to pull out these elemeents and add oneby one to the new array strategy to copy array and objects.
const coppiedArray3 = [...hobbies];
console.log(coppiedArray2);

// rest operator (only work with threee arguments)
const toArray = (arg1, arg2, arg3) => {
  return [arg1, arg2, arg3];
};

console.log(toArray(1, 2, 3, 4));

const toArrayArgs = (...args) => {
  return args;
};

console.log(toArrayArgs(1, 2, 3, 4));

const person2 = {
  personName: "Max",
  personAge: 29,
  // need to have function or substitute the anonymous with the model () {} in order to get the objects attributes
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

const printName = (personData) => {
  console.log(personData.personName);
};
printName(person2);

// object destructuring

const printNameDestructuring = ({ name }) => {
  console.log(name);
};

printNameDestructuring(person);

const { personName, personAge } = person2;
console.log(personName, personAge);

const hobbies2 = ["Sports", "Cooking"];
const [hobby1, hobby2] = hobbies2; //by position array has no name key-value
console.log(hobby1, hobby2);


const fetchData = () => {
  const promise = new Promise((resolve, reject) =>
  {
    setTimeout(() => {
      resolve('Done!');
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer is done!");

  fetchData().then(text => {
    console.log(text);
    return fetchData();
  }).then(text2 => {
    console.log(text2);
  });
}, 5000);

console.log("Hello!");
console.log("Hi!");
