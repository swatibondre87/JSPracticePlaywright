function fetchName() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Sidharth"), 1000);
    });
}
//without async await
// function showName() {
//     const name = fetchName(); // ❌ This returns a Promise, not the value
//     console.log("Name is:", name);
// }

//.then
// function showName() {
//     fetchName().then(name => {
//         console.log("Name is:", name);
//     });
// }


//async await
async function showName() {
    const name = await fetchName();
    console.log("Name is:", name);
}

showName();

