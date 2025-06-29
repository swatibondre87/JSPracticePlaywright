function operateTask(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task operated!") },2000)
    })
}

console.log("Operating the task>>>");

function executeTask(){
    console.log("Executing the task>>>>")
}

operateTask()
.then(msg => {
    console.log(msg)
    return executeTask()
})
