function waitWithCallback(ms, callback) {
 setTimeout(() => {
   callback(`⏳ Waited ${ms}ms (callback)`);
 }, ms);
}

console.log("Function1: Start (callback)");


waitWithCallback(3000, (msg) => {
 console.log(msg);
 console.log("Function2: End (callback)");
});


console.log("Function3: This runs immediately after async call");
