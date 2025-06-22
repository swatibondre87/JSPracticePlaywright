let testResults = ['pass', 'fail', 'pass', 'pass', 'fail', 'skipped', 'pass'];
let pass = testResults.reduce((acc, r) => r === 'pass' ? acc + 1 : acc, 0);
let fail = testResults.reduce((acc, r) => r === 'fail' ? acc + 1 : acc, 0);
let skipped = testResults.reduce((acc, r) => r === 'skipped' ? acc + 1 : acc, 0);


let key1 = "pass"
let key2= 'fail'
let key3= "skipped"

let obj ={
    [key1]: pass,
     [key2]: fail,
      [key3]: skipped,
}

console.log(obj)


