//  1. Visit any page on the browser, and replace the content of all the p tags with the phrase "How’s the Josh?” using Javascript.

let divs = document.getElementsByTagName('p');

for (let ele of divs){
    ele.innerHTML = "How's the josh?"
}
