// seal() allows modification of existing properties, but does not permit addition or deletion of properties. Object.
// freeze(), on the other hand, prevents any modifications, additions, or deletions to properties.Object.

// But we can have all the operation in nested child
// const comFunction = compose(
//   () => 1 + 1,
//   () => 2 + 1
// );
// console.log(comFunction);

const timer = (limit) => {
  for (var i = 0; i < limit; i++) {
    function x(data) {
      setTimeout(() => {
        console.log(data);
      }, i * 1000);
    }
    x(i);
  }
};

function x() {
  let i = 0;
  setTimeout(() => {
    console.log(i);
  }, 3000);
  console.log("JS");
}

function greeting(greeting) {
  const name = "Kumar";
  console.log(`${greeting}, my name is ${this.name}`);
}

// greeting.call(person, "Hello");
// greeting.apply(person, ["Hi"]);
// const greetSatyam = greeting.bind(person);
// greetSatyam("Hey");

const fullname = "Global";

const person = {
  fullname: "Satyam",
  greet: function () {
    console.log(`Hello, ${this.fullname}`);
  },
};

const greetFunc = person.greet;
// greetFunc();

function customLogger(user) {
  function log(message) {
    console.log(`[${this.name}]: ${message}`);
  }

  return log.bind(user); // Binds 'this' to the user object
}

// Usage
const user = { name: "Satyam" };
const logger = customLogger(user);
// logger("Logged In");
const obj2 = {
  name: "Neo",
  sayName: function () {
    console.log("obj2:", this.name);
  },
};

const say = obj2.sayName;
// obj2.sayName();
// say(); //

const obj3 = {
  name: "Neo",
  sayName: () => {
    console.log("obj2:", this.name);
  },
};

const say1 = obj3.sayName;
// obj3.sayName();
// say1(); //

const obj1 = {
  name: "Trinity",
  regularFunc: function () {
    console.log("Regular:", this.name);
  },
  arrowFunc: () => {
    console.log("Arrow:", this.name);
  },
};

// obj1.regularFunc(); // ❓
// obj1.arrowFunc(); // ❓

const hero = {
  name: "Batman",
  speak: function () {
    console.log(`I am ${this.name}`);
  },
};

const speak = hero.speak.bind({ name: "Robin" });
// speak(); // ❓

const agent = {
  name: "Morpheus",
  sayLater: function () {
    setTimeout(function () {
      console.log("Normal:", this.name);
    }, 1000);

    setTimeout(() => {
      console.log("Arrow:", this.name);
    }, 1000);
  },
};

// agent.sayLater();

const object1 = {
  name: "Satyam",
  city: "Sheikhpura",
};
const object2 = {
  name: "Sonu",
};
