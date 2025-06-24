function waitWithPromise(ms) {
 return new Promise((resolve) => {
   setTimeout(() => {
     resolve(`⏳ Waited ${ms}ms (Promise)`);
   }, ms);
 });
}


console.log("Start (Promise)");


waitWithPromise(3000).then((msg) => {
 console.log(msg);
 console.log("End (Promise)");
});


console.log("This runs immediately after Promise call");
