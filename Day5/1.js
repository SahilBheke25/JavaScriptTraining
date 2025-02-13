function validate() {

  const value = document.getElementById('input').value
  const validation = new MyYup()
  validation.isValid(value)
}

class MyYup {

  max(value) {
    return value.length > 10 ? 0 : 1
  }
  min(value) {
    return value.length <= 2 ? 0 : 1
  }
  required(value) {
    return (!value || value.length == 0) ? 0 : 1
  }
  
  isValid(value){
    if(!this.required(value)){
      alert("Required")
    }else if(!this.min(value)){
      alert("False, input length shoulb be greater than 2!")
    }else if(!this.max(value)){
      alert("False, input length shoulb be smaller than 11!")
    }else{
      alert("True")
    }
  }
}

