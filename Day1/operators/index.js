
function questionOne() {

    console.log("--------Question One-----------")

    let i = 4
    console.log(i++)
    console.log(++i)


}
questionOne()


function questionTwo() {

    console.log("--------Question Two-----------")

    let str = "Sahil"
    console.log(str[-3]) // We'll get an Undefied return.
    console.log(str[5])

}
questionTwo()

function questionThree() {
    console.log("--------Question Three----------")
    let obj = {name: "Sahil",
        age: 30,
        obj2:{
            lastNmae: "Bheke"
        }
    };

    let arr = [1, 2, 3, 4];
    let temp1 = undefined
    let temp2 = null

    console.log(JSON.stringify(obj));       // '{"name":"John","age":30}'
    console.log(JSON.stringify(arr));       // '[1,2,3,4]'
    console.log(JSON.stringify(temp1));     // "undefined"
    console.log(JSON.stringify(temp2));      // "null"

}
questionThree()

console.log("--------Question Four-----------")
function questionFour() {

    let invalidJsonString = '{"name": "Sahil", age: 33}';  // Invalid, json string

    let result

    try {
        // This will throw an error as parse take json string as a parameter and returns a valid json object.
        result = JSON.parse(invalidJsonString);
    } catch (error) {

        console.log("Error parsing JSON:", error.message);
    }
    
    console.log(result)
    // Other part of the code will execute correctly.
    try {

        result = JSON.stringify(invalidJsonString);

    } catch (error) {

        console.log(error.message)
        console.log("Error parsing JSON with stringify method:", error.message);

    }

    console.log(result)
    
}
questionFour()