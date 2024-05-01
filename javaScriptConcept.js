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

timer(10);

function x() {
  let i = 0;
  setTimeout(() => {
    console.log(i);
  }, 3000);
  console.log("JS");
}

x();
