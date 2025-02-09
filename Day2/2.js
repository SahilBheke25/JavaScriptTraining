// 1. Write a function that can stop execution of a function for the number of milliseconds sent as an argument

// function sleep(time){  // why this is not working
//     return new Promise(() => setTimeout(()=>console.log("Blocking call"), time))
// }

function sleep(time){
    return new Promise((resolve) => setTimeout(resolve, time))
}
const func = async () => {
    console.log("Printing before")
    //Call your function here eg. sleep(3000)
    await sleep(4000)
    console.log("Printing after")
}
func()

