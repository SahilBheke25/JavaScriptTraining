Assignments

# 1. Write a function that can stop execution of a function for the number of milliseconds sent as an argument
## Example:

```js
const func = async () => {
console.log(“Printing before”)
//Call your function here eg. sleep(3000)
console.log(“Printing after”)
}
```
# 2. Using promises - write a function that fetches data from an API endpoint (GET https://reqres.in/api/users ). Log the data into the console once it is received

# 3. What will be printed to the console when the promise resolves and when it rejects?
```js
const testAsyncFunction = () => 
    {return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve('Test Resolve');
    } else {
        reject('Test Reject');
    }
})
    .catch((err) => {
        console.log('Error caught in testAsyncFunction: ', err);
    });
};
testAsyncFunction()
    .then((res) => {
        console.log('Response in then block: ', res);
    })
    .catch((err) => console.log('Error in catch block: ', err));
```

- Resolve -> Response in then block:  Test Resolve
- Reject -> Error caught in testAsyncFunction:  Test Reject
            Response in then block:  undefined

# 4. What will be printed to the console?
```js
const testAsyncFunction = () => {
return Promise.reject('Test static reject');
};
testAsyncFunction()
.then((res) => {
console.log('Response in then block', res);
})
.catch((err) => console.log('Error in catch block', err));
```
- Error in catch block Test static reject

# 5. What will be printed to the console?
```js
const testAsyncFunction = () => {
return new Promise((resolve, reject) => {
if (Math.random() > 0.5) {
resolve('Test Resolve');
} else 
reject('Test Reject');
}
}).catch((err) => {
console.log('Error caught in testAsyncFunction', err);
throw new Error('Forced error');
});
};
testAsyncFunction()
.then((res) => {
console.log('Response in then block: ', res);
})
.catch((err) => console.log('Error in catch block: ', err));

```

- Resolve -> Response in then block:  Test Resolve
- Reject -> Error caught in testAsyncFunction Test Reject
            Error in catch block:  Error: Forced error
            error location.

# 6. Create a promise that makes a fetch call, but resolves with the data only 2 seconds after the data has been received in the fetch.

# 7. Complete the above tasks with async/await.