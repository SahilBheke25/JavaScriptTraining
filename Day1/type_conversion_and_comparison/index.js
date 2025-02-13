function questionOne() {
  let age = 25;

  if (age <= 0) {
    console.log("Invalid age");
  } else if (age <= 12 && age >= 1) {
    console.log("Child");
  } else if (age <= 18) {
    console.log("Teen");
  } else {
    console.log("Adult");
  }

  switch (true) {
    case age > 18:
      console.log("Adult");
      break;
    case age >= 13:
      console.log("Teen");
    case age > 0:
      console.log("Child");
    default:
      console.log("Invalid age");
  }
}
questionOne();

function questionTwo() {
  let arraySize = 25;
  let array = [];

  for (let i = 0; i < 25; i++) {
    array.push(i);
  }

  console.log(array);
}
questionTwo();

function questionThree() {
  let arraySize = 25;
  let array = [];
  let i = arraySize;

  while (i--) {
    array.push(24 - i);
  }

  console.log(array);
}
questionThree();

function questionFour() {
  function test(callback) {
    return callback;
  }
  function callbackFunc() {
    console.log("Calling the callback function");
    return 5;
  }

  test(() => callbackFunc());
}
questionFour();
