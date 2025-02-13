let i = 0
let arr = [0]

const id2 = document.getElementById('textarea');

function handleEvent() {
    id2.innerText = arr
    i++
    if(i == 1){
        arr[i] = 1
    }else{
        arr[i] = arr[i-1] + arr[i-2]
    }
}   

const id = document.getElementById('button')
id.addEventListener("click", handleEvent)