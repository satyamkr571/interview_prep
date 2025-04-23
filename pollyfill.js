// Array's Polyfills

const numbers = [10, 20, 30];
const name = "Shivam";
// 1. Map

Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

// numbers.myMap((num) => console.log(num));

// 2. forEach

Array.prototype.myForEach = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
};

// numbers.myForEach((num) => console.log(num));

// 3. filter
Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

const filteredArr = numbers.myFilter((num) => num == 2);
// console.log(filteredArr);

// Reduce
Array.prototype.myReduce = function (callback, initialValue) {
  let result = initialValue;
  let startIndex = 0;
  if (!initialValue === undefined) {
    result = this[0];
    startIndex = 1;
  }
  for (let i = startIndex; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }
  return result;
};
// console.log(numbers.myReduce((num, acc) => num * acc, 0));

// Polyfills for Function prototypes

function func(input) {
  console.log(this.name, " " + input);
}

// call
Function.prototype.myCall = function (thisArgs, ...args) {
  context = thisArgs || globalThis;
  context.fn = this;
  const result = context.fn(...args);
  delete context;
  return result;
};

function func(input) {
  console.log(this.name, " " + input);
}

// func("Kumar");
// func.call({ name: "Satyam" }, "Kumar");
// func.myCall({ name: "Satyam" }, "Kumar");

// Apply
Function.prototype.myApply = function (ctx, args) {
  const context = ctx || globalThis;
  context.fn = this;
  const result = context.fn(...args);
  delete context;
  return result;
};

// func.apply({ name: "Satyam" }, ["Kumar"]);
// func.myApply({ name: "Satyam" }, ["Kumar"]);

// Bind
Function.prototype.myBind = function (ctx, ...args) {
  const context = ctx || globalThis;
  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

const funcByBind = func.bind({ name: "Satyam" }, "Singh");
funcByBind("Kumar");

const funcByMyBind = func.myBind({ name: "Satyam" }, "Singh");
funcByMyBind();
