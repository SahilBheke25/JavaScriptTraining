// 7. Complete question 6 with async/await.


// 1st Approach

// function sleep(time){
//     return new Promise((resolves) => setTimeout(resolves, time))
// }

// function fetch_data(){
//     fetch("https://reqres.in/api/users")
//         .then((response) => {
//             return response.json();
//         })
//         .then(async(response) => {
//             await sleep(2000)
//             console.log(response);
//         })
//         .catch((error) => {
//             console.log("MY error: ", error)
//         })
// };

// fetch_data();


// 2nd Approach

const fetch_data = async () => {
    const res = await fetch("https://reqres.in/api/users")
    const data = await res.json()
    console.log(data);
}   
fetch_data()