function quesitonOne() {
    let obj = {
        name: "Harry Potter",
        age: 12,
        address: {
            details: ["4", "Privet Drive"],
            area: "Little Whinging",
            city: "Surrey",
            state: "England"
        }
    }

    // copy array.
    let copyObj = {
        ...obj, address: {
            ...obj.address,
            details: ['5', obj.address.details.slice(1)]
        }
    }
    console.log(copyObj)

}
//  quesitonOne()

function quesitonTwo() {

    let object = {
        a: "Apple",
        b: ["Basketball", "Baseball"],
        c: {
            call: "cellphone"
        },
        d: "Dog"
    }
    let newObj = filterObject(object)

    console.log(newObj);

    function filterObject(obj) {
        let keys = Object.keys(obj)
        let entries = Object.entries(obj)

        console.log("keys: ", keys);
        console.log("entries: ", entries);

        return Object.keys(Object.fromEntries(
            Object.entries(obj).filter(entry => typeof entry[1] === 'object' || Array.isArray(entry[1]))
        ));
    }
    
} quesitonTwo()