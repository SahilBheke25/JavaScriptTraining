function memorized(a){
    const m = new Map
    m.set(a, true)
    return (a) => {
        if(m.has(a)){
            console.log(m.get(a))
        }else{
            m.set(a, true)
            console.log("New entry created")
        }
        
    }
}

const clouser = memorized(3)
clouser(3)
clouser(4)
clouser(4)
clouser(3)
clouser(2)