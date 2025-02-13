function questionOne(){
    // let
    console.log(a)
    let a = 20;
    a = 10
    console.log(a)

    //const
    console.log(b)
    const b = 20
    console.log(b)
}
// questionOne()


function questionTwo(){
    let a = 20;
    let b = 10
    let str = "Hello"
    let arr = [1, 2]
    let arr2 = []
    let c = null;
    let flag = true

    console.log(typeof(a));
    console.log(typeof(b));
    console.log(typeof(str));
    console.log(typeof(arr));
    console.log(typeof(arr2));
    console.log(typeof(c));
    console.log(typeof(d));
    console.log(typeof(flag));
    console.log(isNaN(2))
    console.log(isNaN(arr))

    let temp;

    let n = 10;
    console.log("Is Array: ", Array.isArray(n)); 
    console.log("Is Array: ", Array.isArray(arr)); 
    // console.log("Is Array: ", temp.constructor === Array); 
}
questionTwo()

function questionThree(){

    // Array Object
    let letArr = [1, 2, 3, 4]
    const constArr = [5, 6, 7, 8]

    // Custom Object    
    let letObj = {
        field1: 10,
        field2: 20
    }

    const constObj = {
        field1: 30,
        field2: 40
    }

    console.log("Initial data");
    console.log(letArr)
    console.log(constArr)
    console.log(letObj);    
    console.log(constObj);

    // Modifying Array
    letArr[1] = 0
    constArr[1] = 2332
    console.log("Modified Array data");
    console.log(letArr)
    console.log(constArr)

    // Modifying Custom Object
    letObj
    constObj.field1 = 150
    letObj.field1 = 120
    console.log(letObj);
    console.log(constObj);

}
questionThree()