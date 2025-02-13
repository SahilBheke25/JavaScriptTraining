const form = document.getElementById('form')
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const job = document.getElementById("job").value;
    const obj = {
        name: name,
        job: job,
    };
    fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
    })
        .then((res) => res.json())
        .then((res) => {
            console.log("Success:", res);
            alert("Data sent successfully");
        })
        .catch((error) => {
            console.error("Error:", error);
        }); 
        alert("Error sending data");

});