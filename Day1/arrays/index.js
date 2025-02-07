let array = [{
    "id": 1,
    "first_name": "Nicki",
    "email": "ncrozier0@squarespace.com",
    "date_of_birth": "2009/05/09"
},
{
    "id": 2,
    "first_name": "Raychel",

    "email": "rmcgrady1@cpanel.net",
    "date_of_birth": "1996/11/05"
},
{
    "id": 3,
    "first_name": "Demetris",
    "email": "dkilshall2@elpais.com",
    "date_of_birth": "2018/12/31"
},
{
    "id": 4,
    "first_name": "Amata",
    "email": "abraiden3@canalblog.com",
    "date_of_birth": "2012/05/23"
},
{
    "id": 5,
    "first_name": "Venita",
    "email": "vheap4@clickbank.net",
    "date_of_birth": "2020/10/04"
},
{
    "id": 6,
    "first_name": "Fairfax",
    "email": "fcrichton5@merriam-webster.com",
    "date_of_birth": "2009/12/23"
}, {
    "id": 7,
    "first_name": "Kathleen",
    "email": "kvasyukhnov6@devhub.com",
    "date_of_birth": "2010/12/20"
}, {
    "id": 8,
    "first_name": "Sam",
    "email": "scorck7@sitemeter.com",
    "date_of_birth": "2020/08/30"
}, {
    "id": 9,
    "first_name": "Virgilio",
    "email": "vferandez8@e-recht24.de",
    "date_of_birth": "2000/09/07"
}, {
    "id": 10,
    "first_name": "Townie",
    "email": "tpetyt9@upenn.edu",
    "date_of_birth": "2018/09/01"
}]


function main() {

    ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
        console.log(`${item} is at index ${index} in ${array}`);
    });

    const arr = [NaN];
    console.log(arr.indexOf(NaN));

    // Fetching user by name
    let result = filterByName("Nicki")
    console.log(result)

    // Fectching emails
    let result2 = getEmails()
    console.log(result2)

    // Sort by DOB
    let result3 = sortByDOB()
    console.log(result3)

    // Get user by Id
    let result4 = getById(9)
    console.log(result4);

} main()


function filterByName(first_name) {
    let user = array.filter(item => item.first_name == first_name);
    return user
}

function getEmails(){
    let emails = array.map(item => item.email)
    return emails
}

function sortByDOB(){
    let res = array.sort((user1, user2)=> new Date(user1.date_of_birth)- new Date (user2.date_of_birth))
    return res
}

function getById(id){
    let user = array.find(item => item.id = id)
    return user
}


console.log("----------Question Two----------")

function questionTwo(){

    let arr = [ 10, 2, 3, 4, 5]
    console.log(arr)

    // Mutating Method
    arr.push(10)
    console.log(arr)

    // Mutating Method
    arr.pop()
    console.log(arr)

    // Mutating Method
    // let res = arr.find((id) => id = 2)
    let res = arr.find((item) => item == 3)
    console.log(arr);

    // Non-Mutating Method
    res = arr.map((item) => item +324)
    console.log(arr)

    // Mutating functions
    res = arr.sort((a, b) => a - b)
    console.log(arr);

    // Non-Mutating Method
    res = arr.filter(item => item > 3)
    console.log(arr);

}questionTwo()
