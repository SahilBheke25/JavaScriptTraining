function memorized(value){
    const map = new Map
    return (value) => {
        if(map.has(value)){
            console.log(map.get(value))
        }else{
            map.set(value, true)
            console.log("New entry created")
        }
    }
}

const clouser = memorized()
clouser(3)
clouser(4)
clouser(4)
clouser(3)
clouser(2)