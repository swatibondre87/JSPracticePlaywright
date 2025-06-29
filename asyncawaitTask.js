function operateTask(){
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve("Task operated!")}, 2000 )
        })
    }
console.log("Operating the task>>>");

async function executeTask(){
  
    const result =   await operateTask()
  console.log(result)
    console.log("Executing the task>>>>")

}
executeTask()