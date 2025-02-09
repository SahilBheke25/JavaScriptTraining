// 2. Using promises - write a function that fetches data from an API endpoint (GET https://reqres.in/api/users ). 
// Log the data into the console once it is received

// fetch("https://reqres.in/api/users")
// .then((value)=>{console.log(value)})
// .catch((error) => console.log("Error fetching data: ", error))

// function fetchData() {
//     const data = fetch("https://reqres.in/api/users")
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then((data) => console.log(data))
//         .catch((error) => console.error("Error fetching data:", error));

//     console.log(data)
// }
// fetchData()

async function fetch_data(){
    const fetchPromise = await fetch("https://reqres.in/api/users")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((response) => {
            console.log(JSON.stringify(response));
        });
};

fetch_data();