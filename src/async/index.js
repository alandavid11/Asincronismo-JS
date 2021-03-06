/**
 * DoSomethingAsync() is a function that returns a promise that resolves to 'Do something Async' after
 * 3 seconds.
 * @returns A promise that will resolve with the string 'Do something Async' after 3 seconds.
 */
const doSomethignAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout (() => resolve('Do something Async'), 3000)
        : reject(new Error('Test Error'))
    });
}

const doSomethig = async () =>{
    const something = await doSomethignAsync();
    console.log(something);
}

console.log('Before');
doSomethig();
console.log('After');


const anotherFunction = async () => {
    try {
        const something = await doSomethignAsync();
        console.log(something)
    } catch (error){
        console.error(error)
    }
}

console.log('Before 1');
anotherFunction();
console.log('After 1');