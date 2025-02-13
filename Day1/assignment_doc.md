# Introduction

## 1. Create a simple HTML file in notepad (do not use VSCode). To this, add some javascri by:
   
   ### a. Writing javascript between script tags 

```html
<html>
   <body>
      <script>	

         let add = ()=>{return a+b}
         console.log(a)

      </script>
   </body>
</html>
```

   ### b. Writing javascript in a file and passing that as a src in the script t 

   ```html
   <html>
      <body>
         <script src="index.js"></script>
      </body>
   </html>
   ```

### c. Where to attach the script tag: 
   ```html
   <html> 
      <head></head> 
      <body> 
         <h1 id="test">Hello World!</h1> 
      </body> 
   </html>
   ```

## 2 Given the above html, find out what happens when you try to access the element h1 in javascript (using document.getElementById) and change its content to “Goodbye World” when the script is attached:

- in the head tag changes will not affect because script tag will not found any relavent html code(tags).
   This can be useful if the script needs to modify the DOM structure or content before the page is fully loaded.

- at the start of the body tag 
   Changes will not affect because html tags are not rendered.

- at the end of the body tag 
   Changes will affect.


# Variables:

## 1. Declare a variable - let a;. On another line assign any value you like to a. Log the value of a before and after assignment. Try doing the same with const. 

   - Error for both const and let: We Cannot access 'a' before initialization.

## 2. Use the typeof operator to find the types of different variables. Specially note what t typeof operator returns for arrays, null values and NaN. How can you find if a variable  an array or NaN besides typeof? 

   - type of arr is object.
   - Array.isArray(arr)

## 3. Use let and const to create arrays and objects. Try modifying, deleting properties within the array or object. 
### a What do you expect to happen in both cases? What actually happens in both cases. What is the difference between an object declared as a let or a const variable?
   - We expect that object declared using const can't be modified.
   - But actullay we can modify the object declared using const.
   - We can modify the objects properties using let keyword. But in const we cannot reassign the object to new object, but its properties can be modified.     This means that reference of the object remains same but the properties can still be modified.


# Type conversion and comparison:

## 1. Declare a variable let age = 25;. Write a series of if else statements that will: ○ Print child to the console if age is less than equal to 12. 
### a. Print teen to the console if age is between 13 and 18 (inclusive ) Print adult to the console if age is above 18 

### b. Do the same using switch case. 

## 2. Declare a variable let arraySize = 25;. Using a for loop, add numbers from one onwards into an array till the arraySize is reached. 

## 3. Accomplish the same using a while loop. 

## 4. Can you use return instead of break in loops? 
  - Yes, When we are in a fuction and we met or failed our requirement. there is no other code block we want to execute.

# Functions: 

## 1. What happens when you add a for loop/while loop/switch case block inside a function and use return instead of break? Do statements after the loop run? What is the return value? Can we pass a return value from within a loop? Can you return from inside an if block? What impact does that have? 
   - Break statement only breaks out of the current scope but in return fuction execution stops.
   - No, statements after the loop does not run.
   - return value can be anything.
   - Yes, we can pass a return value from within a loop.
   - Yes, we can return from inside an if block.
   - Code after the if block will not get executed.
  
## 2. Take a function that accepts a function as a parameter (also known as callback function). 
```js
function test(callback){ 
callback(); 
} 
function callbackFunc(){ 
console.log(“Calling the callback function”) 
return 5; 
} 
```
### Explore the following cases - what is printed in the console, and what gets returned: 
   ○ test(callbackFunc) 
   - Printed: Calling the callback fuction, It does not return anything.

   ○ test(callbackFunc()) 
   - Error occured. Because test fuction was expecting a fuction an we passed a value.
    
   ○ test(() => callbackFunc()) 
   - Printed: Calling the callback fuction and nothing gets returned.
    
   ○ What happens when you return callback() from the test function? 
   - When we return callback() from test fuction, "Calling the callback fuction" is printed. 

   ○ What happens when you return callback from the test function?
   - The fuction is returned without executing it.


# Operators:

## 1. What is the difference between ++i and i++? 
   - ++i is a pre incrementor, it increments the i first then return the value.
   - i++ is a post incrementor, it returns the value of i first and then increments it.
  
## 2. What do you think would happen if you pass an index beyond the range of the string? Or if you pass a negative index? Try it out. 
   - We'll get an Undefied return.

## 3. Do you think JSON.stringify would work for arrays as well? What about nested objects? What happens if we pass numbers, strings, undefined, null to JSON.stringify? 
   - Yes, It works on every Datatype.

## 4. What happens if you pass a regular/invalid JSON string to JSON.parse? What will happen if such an invalid function runs in the program? Will other parts of the code execute correctly after that? 
   - It will throw an error as parse take valid json string as a parameter and returns a json object
   - Other part of the code will execute correctly


# Arrays
```js
[{ 
"id": 1, 
"first_name": "Nicki", 
"email": "ncrozier0@squarespace.com", 
"date_of_birth": "2009/05/09" 
}, { 
"id": 2, 
"first_name": "Raychel",

"email": "rmcgrady1@cpanel.net", 
"date_of_birth": "1996/11/05" 
}, { 
"id": 3, 
"first_name": "Demetris", 
"email": "dkilshall2@elpais.com", 
"date_of_birth": "2018/12/31" 
}, { 
"id": 4, 
"first_name": "Amata", 
"email": "abraiden3@canalblog.com", 
"date_of_birth": "2012/05/23" 
}, { 
"id": 5, 
"first_name": "Venita", 
"email": "vheap4@clickbank.net", 
"date_of_birth": "2020/10/04" 
}, { 
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
```
## 1. Take the above array of objects. Accomplish the following tasks: 
### ○ Write a function filterByName that accepts a string as a parameter and returns an array with only those objects where the first_name field includes that string.
### ○ Use Array.map to return an array of all the email fields. 
### ○ Use Array.sort to return the array sorted in descending order by date_of_birth. 
### ○ Write a function getById that accepts a number as a parameter and returns the object where the id is equal to that number. 

## 2. What makes a method mutating or non mutating in Javascript? Find out whether each of the following methods are mutating or non-mutating. How can you verify this?: 

### ○ push 
    - Mutating Method
  
### ○ pop 
    - Mutating Method
  
### ○ filter 
    - Non-Mutating Method
  
### ○ find 
    - Non-Mutating Method
 
### ○ sort 
    - Mutating Method
  
### ○ map 
    - Non-Mutating Method


# Objects:

## 1. How will you create a new copy of the object below while updating the value of address.details[0] to “5“? 
```js
{ 
name:”Harry Potter”, 
age: 12, 
address: { 
details: [“4”, “Privet Drive”], 
area:”Little Whinging”, 
city: “Surrey”, 
state: “England” 
} 
} 
```

## 2. Write a function filterObj that will filter out all the keys of a flat object that have objects or arrays using Object.keys and Object.entries. Example: 
```js
let obj = { 
a:”Apple”, 
b:[“Basketball”,”Baseball”], 
c: { 
call: “cellphone”
}, 
d: “Dog” 
} 
filterObject(obj) //This should return {a:”Apple”, d:”Dog”}
```
