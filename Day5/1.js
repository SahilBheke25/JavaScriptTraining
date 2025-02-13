function validate(input){
    const value = document.getElementById('input').value
    if (value.length == 0 ){
        alert("Required")
    }
    else if(value.length <= 1 || value.length > 10){
        alert("False")
    }else{
        alert("True")
    }
}


