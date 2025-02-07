function questionOne() {

    let age = 25

    if (age > 18) {
        console.log("Adult");
    }
    else if (age <= 18 && age >= 13) {
        console.log("Teen")
    } else {
        console.log("Child");
    }

    switch (true) {
        case age > 18:
            console.log("Adult");
            break
        case age < 13:
            console.log("Child")
        default:
            console.log("Teen");
    }

}
questionOne()


function questionTwo() {

    let arraySize = 25;
    let array = []

    for (let i = 0; i < 25; i++) {
        array.push(i)
    }

    console.log(array);

}
questionTwo()


function questionThree() {

    let arraySize = 25;
    let array = []
    let i = arraySize

    while (i--) {
        array.push(24 - i)
    }

    console.log(array);

}
questionThree()

function questionFour() {
    function test(callback) {
        return callback;
    }
    function callbackFunc() {
        console.log("Calling the callback function");
        return 5;
    }

    test(() => callbackFunc()) 
}
questionFour()
