// 6. Create a promise that makes a fetch call, but resolves with the data only 2 seconds after the data has been received in the fetch.

function func(response){
    return new Promise((resolves) => setTimeout(resolves(response), 2000))
}

const fetch_data = () => {
    return new Promise((resovle, reject) =>{
        fetch("https://reqres.in/api/users")
        .then((reponse) => {
            setTimeout(() => resovle(reponse.json()), 2000)
        })
        .catch((err) => {
            reject("error message: ", err)
        })
    })
}

fetch_data().then((reponse)=>{
    console.log(reponse)
})
.catch((err)=>{
    console.log(err);
});