// 2. Using promises - write a function that fetches data from an API endpoint (GET https://reqres.in/api/users ). 
// Log the data into the console once it is received


function fetch_data(){
    fetch("https://reqres.in/api/users")
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log(response);
        })
        .catch((err) => reject("error message: ", err));
};

fetch_data()