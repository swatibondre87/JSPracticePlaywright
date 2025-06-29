function operateTask(callback){
    console.log("Operating the task>>>");
    setTimeout(() => {
        console.log("Task operated!");
        callback()
    }, 2000)
    }

    function executeTask(){
        console.log("Executing the task>>>>")
    }

    operateTask(executeTask);